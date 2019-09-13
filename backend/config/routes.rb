Rails.application.routes.draw do
  resources :calculators
  resources :inquiries
  resources :user_markets
  resources :properties
  resources :markets
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
