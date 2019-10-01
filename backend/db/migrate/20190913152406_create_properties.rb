class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      
      # t.string :Status
      # t.string :Address
      # t.string :StreetNumber
      # t.string :StreetName
      # t.string :City
      # t.integer :PostalCode
      t.float :Lat
      t.float :Long
      # t.integer :ListPrice
      t.integer :ClosePrice
      # t.string :ListDate
      # t.string :CloseDate
      t.string :CloseDateYear
      t.string :CloseDateMonth
      # t.string :CloseDateDay
      # t.integer :SqFtTotal
      # t.string :PriceSqFtList
      t.string :PriceSqFtSold
      # t.integer :LotSize
      # t.integer :YearBuilt
      # t.integer :BedsTotal
      # t.string :BathsTotal
      # t.string :Stories
      # t.string :NewConstruction
      # t.string :Style
      t.integer :DOM
      t.integer :CDOM
      # t.string :SoldTerms
      # t.string :HOAMandatory
      # t.integer :TaxAmount
      t.integer :market_id
      # t.timestamps

    end
  end
end



