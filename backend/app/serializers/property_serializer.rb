class PropertySerializer < ActiveModel::Serializer
    attributes :Lat, :Long, :ClosePrice, :CloseDateYear,:CloseDateMonth, :PriceSqFtSold, :DOM, :CDOM
end
