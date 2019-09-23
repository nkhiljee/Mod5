class CreateInquiries < ActiveRecord::Migration[5.2]
  def change
    create_table :inquiries do |t|

      t.string :name
      t.string :email
      t.string :phone
      t.integer :zipcode
      t.string :organization
      t.string :company_size
      t.string :message
      t.boolean :contacted
      t.boolean :resolved
      t.timestamps
    end
  end
end


