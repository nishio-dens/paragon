json.set!(:page, @page)
json.set!(:per, @per)
json.set!(:total_count, @variants.total_count)

json.product_variants do
  json.array!(@variants) do |variant|
    json.(variant,
      :id, :product_id, :sku, :product_name, :name,
      :price, :tax_id, :available_on, :is_master,
      :created_at, :updated_at)
  end
end
