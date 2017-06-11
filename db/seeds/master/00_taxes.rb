data = [
  {
    id: 1,
    tax_rate: 8,
    name: "JPN 8%",
    description: "Japan default tax rate",
    is_default: true
  },
]

data.each do |d|
  Tax.find_or_create_by(d)
end