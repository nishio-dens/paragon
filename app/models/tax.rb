# == Schema Information
#
# Table name: taxes
#
#  id          :integer          not null, primary key
#  tax_rate    :integer          not null
#  name        :string(255)      not null
#  description :string(255)      not null
#  is_default  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tax < ApplicationRecord
  # Relations

  # Validations
  validates :name, presence: true, length: { maximum: 255 }
  validates :description, presence: true, length: { maximum: 255 }
end
