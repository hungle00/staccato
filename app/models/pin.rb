class Pin < ApplicationRecord
  geocoded_by :location
  has_one_attached :image

  validates :name, presence: true
  validates :location, presence: true
  after_validation :geocode, if: :will_save_change_to_location?

  scope :published, -> { where(published: true) }
  scope :with_geocoded_coordinates, -> { where("latitude IS NOT NULL and longitude IS NOT NULL") }
end
