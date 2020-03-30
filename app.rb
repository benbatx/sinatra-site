require 'sinatra'
require "sinatra/reloader"

get '/' do
  erb :home
end

names_colors = {}
get '/guestbook' do
  first_name = params[:first_name]
  fav_color = params[:fav_color]

  if first_name && fav_color
    names_colors[first_name] = fav_color
  end

  @names_colors = names_colors

  erb :guestbook
end
