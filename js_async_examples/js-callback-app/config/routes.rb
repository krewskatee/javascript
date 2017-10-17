Rails.application.routes.draw do
  get "/" => 'pages#home'
  get "/stations" => 'pages#stations'
end
