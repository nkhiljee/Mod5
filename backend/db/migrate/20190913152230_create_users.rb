class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      
      t.string :name
      t.string :email
      # t.string :password
      t.string :password_digest
      t.string :city
      t.string :state
      t.string :phone
      t.string :organization
      t.string :company_size
      t.string :account_type
      t.boolean :is_admin, :default => false
      t.timestamps
    end
  end
end
