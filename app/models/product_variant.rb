# == Schema Information
#
# Table name: product_variants
#
#  id           :integer          not null, primary key
#  product_id   :integer          not null
#  sku          :string(255)      not null
#  name         :string(255)      default(""), not null
#  price        :decimal(8, 2)    not null
#  tax_id       :integer          not null
#  available_on :datetime
#  image        :datetime
#  is_master    :boolean          default("0"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class ProductVariant < ApplicationRecord
  # Relations
  belongs_to :product
  belongs_to :tax

  # Validations
  validates :sku, presence: true, length: { maximum: 255 }
  validates :name, length: { maximum: 255 }
  validates :price, presence: true

  # Delegates
  delegate :name, to: :product, prefix: :product
  delegate :description, to: :product, prefix: :product
  delegate :keywords, to: :product, prefix: :product
end
