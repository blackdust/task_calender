class Task
  include Mongoid::Document
  field :content, type: String
  field :date, type: String
  # filed :user_id, type:String
  
  belongs_to :user
end
