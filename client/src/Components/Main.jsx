import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import CreateWine from "./CreateWine";
import DeleteWine from "./DeleteWine";
import ViewWine from "./ViewWine";
import UpdateWine from "./UpdateWine";

export default class Main extends Component {
  state = {
    users: [],
    restaurants: [],
    wines: [],
  };

  componentDidMount() {
    this.fetchUsers();
    this.fetchRestaurants();
    this.fetchWines();
  }

  fetchUsers = async () => {
    const users = await getUsers();
    this.setState({ users });
  };
  fetchRestaurants = async () => {
    const restaurants = await getRestaurants();
    this.setState({ restaurants });
  };
  fetchWines = async () => {
    const wines = await getWines();
    this.setState({ wines });
  };

  handleUserCreate = async (userData) => {
    const newUser = await postUser(userData);
    this.setState(prevState => ({
      users: [...prevState.users, newUser]
    }))
  }

  handleUserUpdate = async (id, userData) => {
    const newUser = await putUser(id, userData);
    this.setState(prevState => ({
      users: prevState.users.map(user => user.id === parseInt(id) ? newUser : user)
    }))
  }

  handleUserDelete = async (id) => {
    await deleteUser(id);
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id)
    }))
  }

  handleRestaurantCreate = async (restaurantData) => {
    const newRestaurant = await postRestaurant(restaurantData);
    this.setState(prevState => ({
      restaurants: [...prevState.restaurants, newRestaurant]
    }))
  }

  handleRestaurantUpdate = async (id, restaurantData) => {
    const newRestaurant = await putRestaurant(id, restaurantData);
    this.setState(prevState => ({
      restaurants: prevState.restaurants.map(restaurant => restaurant.id === parseInt(id) ? newRestaurant : restaurant)
    }))
  }

  handleRestaurantDelete = async (id) => {
    await deleteRestaurant(id);
    this.setState(prevState => ({
      restaurants: prevState.restaurants.filter(restaurant => restaurant.id !== id)
    }))
  }

  handleWineCreate = async (wineData) => {
    const newWine = await postWine(wineData);
    this.setState(prevState => ({
      wines: [...prevState.wines, newWine]
    }))
  }

  handleWineUpdate = async (id, wineData) => {
    const newWine = await putWine(id, wineData);
    this.setState(prevState => ({
      wines: prevState.wines.map(wine => wine.id === parseInt(id) ? newWine : wine)
    }))
  }

  handleWineDelete = async (id) => {
    await deleteWine(id);
    this.setState(prevState => ({
      wines: prevState.wines.filter(wine => wine.id !== id)
    }))
  }


}