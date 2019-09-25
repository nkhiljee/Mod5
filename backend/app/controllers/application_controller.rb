class ApplicationController < ActionController::API
    
    before_action :check_authentication

    def encode_token(payload) # token generation
        JWT.encode(payload, "RESecret", "HS256")
    end   

    def auth_header
        request.headers["Authorization"]
    end

    def current_user
        if decoded_token
            # byebug
            user_id = decoded_token["user_id"]
            User.find(user_id)
            # byebug
        end
    end

    def decoded_token
        if auth_header
            token = auth_header.split(" ")[1]
            begin
                # byebug
                JWT.decode(token, "RESecret")[0]
            rescue JWT::DecodeError
                nil
            end        
        end
    end

    def check_authentication
        # byebug
        render json: {error: 'Please login'}, status:401 if !logged_in?
    end

    def logged_in?
        # byebug
        !!current_user
    end
end
