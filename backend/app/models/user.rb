class User < ApplicationRecord
    has_many :user_markets
    has_many :markets, through: :user_markets
    has_secure_password
end
