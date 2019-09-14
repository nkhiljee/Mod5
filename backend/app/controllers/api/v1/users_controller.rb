class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.create(:name, :email, :password, :city, :state, :phone, :organization, :company_size)
        render json: @user, status: 201
    end

    def update
        @user = User.find(params[:id])
        # byebug
        @user.update(user_params)
        render json: @user, status: 201
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :city, :state, :phone, :organization, :company_size, :is_admin)
    end

end
