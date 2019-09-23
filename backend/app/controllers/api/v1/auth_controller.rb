class Api::V1::AuthController < ApplicationController

    skip_before_action :check_authentication, only: [:create]

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            # byebug
            render json: {email: user.email, token: encode_token({user_id: user.id}), id: user.id, admin: user.is_admin, account: user.account_type}, status: 201
        else
            render json: {error: "Invalid email or password"}
        end
    end
end
