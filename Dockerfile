FROM elixir:1.9.1-alpine
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

ENV PORT=4000
CMD ["mix", "phx.server"]

