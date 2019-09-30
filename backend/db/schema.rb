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

ActiveRecord::Schema.define(version: 2019_09_13_160115) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calculators", force: :cascade do |t|
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.integer "arv"
    t.integer "rehab"
    t.integer "purchase_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inquiries", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.integer "zipcode"
    t.string "organization"
    t.string "company_size"
    t.string "message"
    t.boolean "contacted"
    t.boolean "resolved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "markets", force: :cascade do |t|
    t.string "city"
    t.string "state"
    t.string "last_update"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "Lat"
    t.string "Long"
    t.integer "ClosePrice"
    t.string "CloseDate"
    t.string "PriceSqFtSold"
    t.integer "DOM"
    t.integer "CDOM"
    t.string "SoldTerms"
    t.integer "market_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_markets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "market_id"
    t.integer "num_markets"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "city"
    t.string "state"
    t.string "phone"
    t.string "organization"
    t.string "company_size"
    t.string "account_type"
    t.boolean "is_admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
