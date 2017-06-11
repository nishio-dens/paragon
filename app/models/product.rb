# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  description :text(65535)
#  keywords    :string(255)      default(""), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  # Relations
  has_many :product_variants
  has_many :product_categories
  has_many :categories, through: :product_categories

  accepts_nested_attributes_for :product_variants, allow_destroy: true

  # Validations
  validates :name, presence: true, length: { maximum: 255 }
  validates :keywords, presence: true, length: { maximum: 255 }
end
