class CreateCalculators < ActiveRecord::Migration[5.2]
  def change
    create_table :calculators do |t|

      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.integer :arv
      t.integer :rehab
      t.integer :purchase_price
      t.timestamps
    end
  end
end
