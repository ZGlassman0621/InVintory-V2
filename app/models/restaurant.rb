class Restaurant < ApplicationRecord
  has_many :wine
  has_many :users
end
