class Api::V1::UsersController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    #Sign Up
    def create
        # byebug
        @user = User.create(user_params)
        # byebug ##potential issue with password digest
        if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :created
            # render json: @user, status: 201
        else
            render json: { error: 'failed to create user' }, status: 401
            # render json: @user, status: 201
        end
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
        params.permit(:name, :email, :password, :city, :state, :phone, :organization, :company_size, :account_type, :is_admin)
    end

end
