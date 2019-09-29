import Config

application_port = System.fetch_env!("PORT")

config :love, DockerElixir19ReleaseWeb.Endpoint,
  http: [:inet6, port: String.to_integer(application_port)],

config :docker_elixir_19_release,
  cool_text: cool_text
