data = [
  {
    id: 1,
    name: "Books"
  },
  {
    id: 2,
    name: "Clothing & Accessories"
  },
  {
    id: 3,
    name: "Toys & Games"
  },
  {
    id: 4,
    name: "Video Games"
  },
]

data.each do |d|
  Category.find_or_create_by(d)
end