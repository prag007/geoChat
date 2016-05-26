class UsersController < ApplicationController
  before_action :authenticate_user!
  def Index
    @users = User.all
  end
  def Create
    @user = User.new
  end

  def Show
  @user = User.find_by[__id__]
  end
  def Update
    user = User.find_by[__id__]
  end
  def Delete
    user = User.find_by(name: 'David')
    user.destroy
  end
  private
  parameters {

  }
end
