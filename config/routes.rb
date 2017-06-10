Rails.application.routes.draw do
  root to: "inventories#index"

  resources :inventories
  resources :products
end
