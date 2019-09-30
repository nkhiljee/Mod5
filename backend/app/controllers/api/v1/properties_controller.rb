class Api::V1::PropertiesController < ApplicationController


    def index
        @properties = Property.all
        render json: @properties
    end

    def show
        @property = Property.find(params[:id])
        render json: @property
    end

    def create

    end

end


# SELECT ClosePrice, CloseDate, PriceSqFtSold, DOM, CDOM FROM properties