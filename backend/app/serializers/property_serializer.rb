class PropertySerializer < ActiveModel::Serializer
    attributes :ClosePrice, :CloseDate, :PriceSqFtSold, :DOM, :CDOM, :Lat, :Long
end
