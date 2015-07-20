class SessionsController < ApplicationController

  def new
  end

  def create

    user = User.find_by(mail: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      # log_in user
      redirect_to user
    else
      flash[:danger] = 'Invalid email/password combination' # 不完全正确
      render 'new'
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end
end
