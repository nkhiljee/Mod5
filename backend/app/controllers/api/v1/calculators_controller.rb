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
        @calculator = Calculator.create(calculator_params)
        render json: @calculator, status: 201
    end

    def destroy
        @calculator = Calculator.find(params[:id])
        @calculator.destroy
    end

    private
    def calculator_params
        params.require(:calculator).permit(:address, :city, :state, :zip, :arv, :rehab, :purchase_price)
    end
end

