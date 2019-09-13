class CreateMarkets < ActiveRecord::Migration[5.2]
  def change
    create_table :markets do |t|
      
      t.string :city
      t.string :state
      t.string :last_update
      t.timestamps
    end
  end
end
