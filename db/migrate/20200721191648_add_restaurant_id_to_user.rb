class AddRestaurantIdToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :restaurant_id, :integer
  end
end
