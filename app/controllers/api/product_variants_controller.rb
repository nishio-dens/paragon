class Api::ProductVariantsController < ApplicationController
  def index
    @page = params[:page] || 1
    @per = params[:per] || 50
    @variants = ProductVariant
                  .preload(:product)
                  .all
                  .page(@page)
                  .per(@per)
  end
end
