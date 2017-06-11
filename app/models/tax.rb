# == Schema Information
#
# Table name: taxes
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  description :string(255)      not null
#  is_default  :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tax < ApplicationRecord
end
