class User < ApplicationRecord
    has_secure_password
    has_many :user_markets
    has_many :markets, through: :user_markets
end
