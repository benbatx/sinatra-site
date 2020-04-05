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
  # { "type": "success", "value": { "id": 75, "joke": "Chuck Norris can believe it's not butter.", "categories": [] } }

  @joke_str = resp['value']['joke']
  erb(:jokes)
end

names_colors = {}
get('/guestbook') do
  # params comes from the url, for example:
  # http://localhost:4567?first_name=ben&fav_color=purple
  # ->
  # params is:
  # {"first_name" => "ben", "fav_color" => "purple"}
  first_name = params['first_name']
  fav_color = params['fav_color']

  if first_name && fav_color
    names_colors[first_name] = fav_color
  end

  @names_colors = names_colors

  erb(:guestbook)
end
