class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :password, :city, :state, :phone, :organization, :company_size, :account_type, :is_admin
end