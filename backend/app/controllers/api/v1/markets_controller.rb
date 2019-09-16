class Api::V1::MarketsController < ApplicationController


    def index
        @markets = Market.all
        render json: @markets
    end

    def show
        @market = Market.find(params[:id])
        render json: @market
    end

    def update
        @market = Market.find(params[:id])
        # byebug
        @market.update(market_params)
        render json: @market, status: 201
    end

    def destroy
        @market = Market.find(params[:id])
        @market.destroy
    end

    private
    def market_params
        params.require(:user_market).permit(:user_id,:market_id,:num_markets)
    end

end


