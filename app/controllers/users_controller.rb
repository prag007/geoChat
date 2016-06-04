class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create

  end

  def show

  @user = User.find_by[__id__]

  end

  def update
    user = User.find_by[__id__]
  end

  def destroy

    user = User.find_by(name: 'David')
    user.destroy
  end
  private
end
