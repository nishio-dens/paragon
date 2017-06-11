data = [
  {
    id: 1,
    name: "PARAGON Men's Confort soft T-Shirt",
    description: "High quality and corfortable 100% cotton T-Shirts.",
    keywords: "T-Shirt,Cotton",
    category_ids: [2],
    product_variants_attributes: [
      {
        is_master: true,
        sku: "FS20170611_001",
        name: "Small",
        price: "1500",
        tax_id: 1,
        available_on: "1970-01-01 09:00:00+0900",
        image: nil,
      },
      {
        is_master: false,
        sku: "FS20170611_002",
        name: "Medium",
        price: "1500",
        tax_id: 1,
        available_on: "1970-01-01 09:00:00+0900",
        image: nil,
      },
      {
        is_master: false,
        sku: "FS20170611_003",
        name: "Large",
        price: "1500",
        tax_id: 1,
        available_on: "1970-01-01 09:00:00+0900",
        image: nil,
      },
    ],
  },
  {
    id: 2,
    name: "PARAGON Own Brand Short-Sleeve Shirt",
    description: "High quality Short-sleeve Shirt",
    keywords: "T-Shirt,Cotton",
    category_ids: [2],
    product_variants_attributes: [
      {
        is_master: true,
        sku: "FS20170610_010",
        name: "",
        price: "7000",
        tax_id: 1,
        available_on: "1970-01-01 09:00:00+0900",
        image: nil,
      },
    ],
  },
]

data.each do |d|
  unless Product.exists?(d[:id])
    a = Product.new(d)
    a.save!
  end
end
