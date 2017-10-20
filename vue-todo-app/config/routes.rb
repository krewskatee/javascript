Rails.application.routes.draw do
  get '/' => 'tasks#index'
  get '/cart' => 'carts#index'
end
