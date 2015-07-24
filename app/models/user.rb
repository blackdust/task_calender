class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  field :name, type: String
  field :mail, type: String
  validates_presence_of :mail,:name
   field:password_digest, type:String
   has_secure_password
   # validates_confirmation_of :password
   has_many :tasks
   # attr_accessor  :password, :password_confirmation 
   validates_format_of :mail, with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
   validates :password, length: { minimum: 8, maximum: 16 }
end
