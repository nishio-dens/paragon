require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Paragon
  class Application < Rails::Application
    config.load_defaults 5.1

    config.time_zone = 'Tokyo'

    config.autoload_paths += Dir["#{config.root}/services"]

    config.generators do |g|
      g.helper false
      g.stylesheets false
      g.javascripts false
    end
  end
end
