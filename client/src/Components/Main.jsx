import React, { Component } from "react";
import { Route } from "react-router-dom";
import { postUser, putUser, getUsers } from "../Services/users.js";
import { getRestaurants, postRestaurants } from "../Services/restaurants.js";

import Login from "./Login";
import Register from "./Register";
import {
  getAllWines,
  postWine,
  putWine,
  deleteWine,
} from "../Services/wines.js";
import CreateWine from "./CreateWine";
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
    const wines = await getAllWines();
    this.setState({ wines });
  };

  handleUserCreate = async (userData) => {
    const newUser = await postUser(userData);
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
    }));
  };

  // handleUserDelete = async (id) => {
  //   await deleteUser(id);
  //   this.setState(prevState => ({
  //     users: prevState.users.filter(user => user.id !== id)
  //   }))
  // }

  handleRestaurantCreate = async (restaurantData) => {
    const newRestaurant = await postRestaurants(restaurantData);
    this.setState((prevState) => ({
      restaurants: [...prevState.restaurants, newRestaurant],
    }));
  };

  handleWineCreate = async (wineData) => {
    const newWine = await postWine(wineData);
    this.setState((prevState) => ({
      wines: [...prevState.wines, newWine],
    }));
  };

  handleWineUpdate = async (id, wineData) => {
    const newWine = await putWine(id, wineData);
    this.setState((prevState) => ({
      wines: prevState.wines.map((wine) =>
        wine.id === parseInt(id) ? newWine : wine
      ),
    }));
  };

  handleWineDelete = async (id) => {
    await deleteWine(id);
    this.setState((prevState) => ({
      wines: prevState.wines.filter((wine) => wine.id !== id),
    }));
  };
}

var MainPage = React.createClass({
  render: function () {
    return (
      <div>
        <p>VIEW INVENTORY</p>
        <button link="./SeeInventory.jsx">GO</button>
        <p>SEARCH</p>
        <button link="./Search.jsx">GO</button>
        <p>VIEW LOW INVENTORY LIST</p>
        <button link="./LowInventory.jsx">GO</button>
      </div>
    );
  },
});
