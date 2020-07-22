class CreateJoinTableRestaurantsWines < ActiveRecord::Migration[6.0]
  def change
    create_join_table :restaurants, :wines do |t|
      # t.index [:restaurant_id, :wine_id]
      # t.index [:wine_id, :restaurant_id]
    end
  end
end
