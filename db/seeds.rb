Dir.glob(Rails.root.join("db", "seeds", "master", "*.rb")).sort.each do |file|
  load file
end
Dir.glob(Rails.root.join("db", "seeds", Rails.env, "*.rb")).sort.each do |file|
  load file
end
