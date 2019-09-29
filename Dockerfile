FROM elixir:1.9.1-alpine AS build-stage
ENV MIX_ENV=prod
WORKDIR /app
RUN apk add --no-cache build-base git nodejs-npm && \
    mix local.hex --force && \
    mix local.rebar --force
COPY mix.exs mix.lock ./
COPY assets/package.json ./assets/package.json
RUN mix deps.get && mix deps.compile
RUN cd assets && npm install
COPY . .
RUN cd assets && node_modules/webpack/bin/webpack.js --mode production
RUN echo 'use Mix.Config' > config/prod.secret.exs
RUN mix phx.digest
RUN mix compile
RUN mix release

CMD ["_build/prod/rel/love/bin/love", "start"]

# ---- Application Stage ----
FROM alpine:3.10.2

ENV REFRESHED_AT=2018-07-19 \
    LANG=en_US.UTF-8 \
    HOME=/home/app \
    TERM=xterm

RUN \
    #Install Dependencies for Erlang and Distillery \
    apk add --no-cache \
        ncurses-libs \
        zlib \
        openssl \
        ca-certificates \
        bash && \
    update-ca-certificates --fresh && \
    #Install bash which is required by Distillery \
    #Create /opt/app directory and default user \
    mkdir -p ${HOME} && \
    apk --no-cache upgrade

# Copy over the build artifact from the previous step and create a non root user
WORKDIR /home/app
COPY --from=build-stage /app/_build .

ENV PORT=4000
# Run the Phoenix app
CMD ["./prod/rel/love/bin/love", "start"]
