# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create!(username: "admin2", email: "admin2@admin.com", password: "12345678")

hall = Wine.create!(winery: "Hall", wine_name: "Jack's Masterpiece", vintage: "2015", bottles: "300")

bouchon = Restaurant.create!(name: "Bouchon", location: "Yountville")

@user=User.create!(username: "Arthur", email: "Arthur@dent.com", password: "fenchurch")

@rateotu=Restaurant.create!(name: "The Restaurant at the End of the Universe", location: "Frogstar World B")

@wine=Wine.create!(winery: "Gaia Wines", wine_name: "Retsina", vintage: "1982", bottles: "24")

