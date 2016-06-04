class Message
  include Mongoid::Document
  include Mongoid::Timestamps
  include Geocoder::Model::Mongoid
  field :id, type: Integer
  field :hashtag, type: String
  field :content, type: String
  field :latitude, type: Float
  field :longtitude, type: Float

  #  index({hashtag: 1},{unique: true, name: 'hashtag'})
 # index({content: 1},{unique: true, name: 'content'})
  validates_presence_of :hashtag, :content, :id, :latitude, :longtitude, :presence => true
end