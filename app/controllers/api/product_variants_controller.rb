class Api::ProductVariantsController < ApplicationController
  def index
    @variants = ProductVariant
                  .preload(:product)
                  .all
  end
end
