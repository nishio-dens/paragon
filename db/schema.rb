# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "categories", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT" do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "product_categories", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT" do |t|
    t.integer "product_id", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "product_categories_category_id_fk"
    t.index ["product_id"], name: "product_categories_product_id_fk"
  end

  create_table "product_variants", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT" do |t|
    t.integer "product_id", null: false
    t.string "sku", null: false
    t.string "name", default: "", null: false
    t.decimal "price", precision: 8, scale: 2, null: false
    t.integer "tax_id", null: false
    t.datetime "available_on"
    t.datetime "image"
    t.boolean "is_master", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "product_variants_product_id_fk"
    t.index ["tax_id"], name: "product_variants_tax_id_fk"
  end

  create_table "products", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT" do |t|
    t.string "name", null: false
    t.text "description"
    t.string "keywords", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "taxes", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT" do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.boolean "is_default", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "product_categories", "categories", name: "product_categories_category_id_fk"
  add_foreign_key "product_categories", "products", name: "product_categories_product_id_fk"
  add_foreign_key "product_variants", "products", name: "product_variants_product_id_fk"
  add_foreign_key "product_variants", "taxes", name: "product_variants_tax_id_fk"
end
