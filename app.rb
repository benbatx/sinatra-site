require 'bundler'
Bundler.require(:default)
require "sinatra/reloader"
# ignore plz ^

get('/') do
  erb(:home)
end

get('/jokes') do
  resp = HTTParty.get('http://api.icndb.com/jokes/random').parsed_response

  # resp looks like
  # {
  #      "type" => "success",
  #     "value" => {
  #                 "id" => 38,
  #               "joke" => "Someone once videotaped Chuck Norris getting pissed off. It was called Walker: Texas Chain Saw Masacre.",
  #         "categories" => []
  #     }
  # }

  @joke_str = resp['value']['joke']
  erb(:jokes)
end

names_colors = {}
get('/guestbook') do
  first_name = params['first_name']
  fav_color = params['fav_color']

  if first_name && fav_color
    names_colors[first_name] = fav_color
  end

  @names_colors = names_colors

  erb(:guestbook)
end
