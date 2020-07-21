class CreateWines < ActiveRecord::Migration[6.0]
  def change
    create_table :wines do |t|
      t.string :winery
      t.string :wine_name
      t.string :vintage
      t.string :bottles

      t.timestamps
    end
  end
end
