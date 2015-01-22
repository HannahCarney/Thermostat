require 'sinatra'

set :public_dir, Proc.new { File.join(root, "js") }


  get '/' do
    erb :index
  end

  get '/2' do
    erb :index2
  end



