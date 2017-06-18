class Api::ProductVariantsController < ApplicationController
  include PageSearchable

  SEARCH_ACCEPTABLE_ATTRIBUTES = %i(
    id_eq product_id_eq sku_eq product_name_cont name_cont
    price_gteq price_lteq available_on_gteq available_on_lteq
    created_at_gteq created_at_lteq updated_at_gteq updated_at_lteq
  )
  SORT_ACCEPTABLE_ATTRIBUTES = %i(
    id product_id sku product_name name price available_on created_at updated_at
  )

  def index
    @page = current_page
    @per = page_per
    search = ProductVariant
               .joins(:product)
               .preload(:product)
               .all
               .ransack(searchable_params[:q])
    search.sorts = order_params if order_params.present?
    @variants = search
                  .result
                  .page(@page)
                  .per(@per)
  end

  private

  def searchable_params
    params.permit(q: SEARCH_ACCEPTABLE_ATTRIBUTES)
  end

  def order_params
    @_order_params ||=
      if params[:s].present?
        params[:s].permit(SORT_ACCEPTABLE_ATTRIBUTES).to_h.map { |k, v| "#{k} #{v}" }
      end
  end
end
