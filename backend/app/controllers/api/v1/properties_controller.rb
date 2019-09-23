class Api::V1::PropertiesController < ApplicationController


    def index
        @properties = Property.all
        # @properties = SELECT [ClosePrice, CloseDate, PriceSqFtSold, DOM, CDOM] FROM properties
        render json: @properties
    end

    def show
        @property = Property.find(params[:id])
        render json: @property
    end

end


# SELECT ClosePrice, CloseDate, PriceSqFtSold, DOM, CDOM FROM properties