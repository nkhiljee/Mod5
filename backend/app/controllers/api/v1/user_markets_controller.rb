class Api::V1::UserMarketsController < ApplicationController
    def index
        @usermarkets = UserMarket.all
        render json: @usermarkets
    end

    def show
        @usermarket = UserMarket.find(params[:id])
        render json: @usermarket
    end

    def update
        @usermarket = UserMarket.find(params[:id])
        # byebug
        @usermarket.update(usermarket_params)
        render json: @usermarket, status: 201
    end

    def destroy
        @usermarket = UserMarket.find(params[:id])
        @usermarket.destroy
    end

    private
    def usermarket_params
        params.require(:user_market).permit(:user_id,:market_id,:num_markets)

    end

end