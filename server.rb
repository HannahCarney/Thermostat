require 'sinatra'
require 'net/http'

set :public_dir, Proc.new { File.join(root, "src")}


get '/' do
erb :index
end