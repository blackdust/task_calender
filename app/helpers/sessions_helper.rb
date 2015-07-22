module SessionsHelper



  def log_in(user)
    p 11111111111111
    session[:user_id] = user.id.to_s
    p session[:user_id]
  end
 
  def current_user
    @current_user ||= User.where(id: session[:user_id].to_s).first
  end

  def logged_in?
    !current_user.nil?
  end
  
  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
end
