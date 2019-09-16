Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :calculators, only: [:index, :show, :create, :destroy]
      resources :inquiries, only: [:index, :show, :create, :update, :destroy]
      resources :user_markets, only: [:index, :show, :create, :update, :destroy]
      resources :properties, only: [:index, :show]
      resources :markets, only: [:index, :show, :create, :update]
      resources :users, only: [:index, :show, :create, :update, :destroy]
      post '/login', to: 'auth#create'
    end
  end
end

