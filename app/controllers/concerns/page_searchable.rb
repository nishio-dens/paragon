module PageSearchable
  extend ActiveSupport::Concern

  MAX_PER = 100

  def current_page
    params[:page] || 1
  end

  def page_per
    per = params[:per] || 50
    per.to_i > MAX_PER ? MAX_PER : per
  end
end