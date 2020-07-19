class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({user_id: @user.id, username: @user.username});
      render json: {user: @user, token: @token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
