create_table :products do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.varchar :name
  t.text :description, null: true
  t.varchar :keywords, default: ""

  t.datetime :created_at
  t.datetime :updated_at
end

create_table :product_variants do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int :product_id
  t.varchar :sku
  t.varchar :name, default: ""
  t.decimal :price, precision: 8, scale: 2
  t.int :tax_id
  t.datetime :available_on, null: true
  t.datetime :image, null: true
  t.boolean :is_master, default: false

  t.datetime :created_at
  t.datetime :updated_at

  t.foreign_key :product_id, reference: :products, reference_column: :id
  t.foreign_key :tax_id, reference: :taxes, reference_column: :id
end

create_table :product_categories do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.int :product_id
  t.int :category_id

  t.datetime :created_at
  t.datetime :updated_at

  t.foreign_key :product_id, reference: :products, reference_column: :id
  t.foreign_key :category_id, reference: :categories, reference_column: :id
end

create_table :categories do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.varchar :name

  t.datetime :created_at
  t.datetime :updated_at
end

create_table :taxes do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.varchar :name
  t.varchar :description
  t.boolean :is_default
  t.datetime :created_at
  t.datetime :updated_at
end

create_table :schema_migrations, default_charset: :utf8mb4, collate: :utf8mb4_unicode_ci do |t|
  t.varchar :version, limit: 191

  t.index :version, name: "unique_schema_migrations", unique: true
end

create_table :ar_internal_metadata, collate: :utf8_bin do |t|
  t.varchar :key
  t.varchar :value
  t.datetime :created_at
  t.datetime :updated_at
end
