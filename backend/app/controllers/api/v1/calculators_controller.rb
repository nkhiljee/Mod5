class Api::V1::CalculatorsController < ApplicationController


    def index
        @calculators = Calculator.all
        render json: @calculators
    end

    def show
        @calculator = Calculator.find(params[:id])
        render json: @calculator
    end

    def create
        @inquiry = Inquiry.create(:address, :city, :state, :zip, :arv, :rehab, :purchase_price)
        render json: @inquiry, status: 201
    end

end

