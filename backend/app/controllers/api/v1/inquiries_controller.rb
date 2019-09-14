class Api::V1::InquiriesController < ApplicationController

    def index
        @inquiries = Inquiry.all
        render json: @inquiries
    end

    def show
        @inquiry = Inquiry.find(params[:id])
        render json: @inquiry
    end

    def create
        @inquiry = Inquiry.create(:name, :email, :phone, :zipcode, :organization, :company_size)
        render json: @inquiry, status: 201
    end

    def update
        @inquiry = Inquiry.find(params[:id])
        # byebug
        @inquiry.update(inquiry_params)
        render json: @inquiry, status: 201
    end


    private
    def inquiry_params
        params.require(:inquiry).permit(:name, :email, :phone, :zipcode, :organization, :company_size, :contacted, :resolved)
    end
end


t.string :name
t.string :email
t.string :phone
t.integer :zipcode
t.string :organization
t.string :company_size
t.boolean :contacted
t.boolean :resolved