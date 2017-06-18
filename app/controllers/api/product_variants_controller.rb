class Api::ProductVariantsController < ApplicationController
  include PageSearchable

  SEARCH_ACCEPTABLE_ATTRIBUTES = %i(
    id_eq product_id_eq sku_eq product_name_cont name_cont
    price_gteq price_lteq available_on_gteq available_on_lteq
    created_at_gteq created_at_lteq updated_at_gteq updated_at_lteq
  )
  SORT_ACCEPTABLE_ATTRIBUTES = %i(
    id product_id sku product_name price available_on created_at updated_at
  )

  def index
    @page = current_page
    @per = page_per
    @variants = ProductVariant
                  .preload(:product)
                  .all
                  .ransack(searchable_params[:q])
                  .result
                  .order(order_params[:s])
                  .page(@page)
                  .per(@per)
  end

  private

  def searchable_params
    params.permit(q: SEARCH_ACCEPTABLE_ATTRIBUTES)
  end

  def order_params
    params.permit(s: SORT_ACCEPTABLE_ATTRIBUTES).to_h
  end
end
