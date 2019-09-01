defmodule LoveWeb.PageController do
  use LoveWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
