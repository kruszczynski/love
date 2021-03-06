defmodule LoveWeb.Router do
  use LoveWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", LoveWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/obiad", PageController, :index
    get "/party", PageController, :index
    get "/ceremonia", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", LoveWeb do
  #   pipe_through :api
  # end
end
