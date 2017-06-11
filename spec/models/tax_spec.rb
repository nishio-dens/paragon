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

require 'rails_helper'

RSpec.describe Tax, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
