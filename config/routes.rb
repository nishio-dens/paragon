Rails.application.routes.draw do
  root to: "inventories#index"

  resources :inventories
  resources :products

  namespace :api, defaults: { format: :json } do
    resources :product_variants
  end
end
