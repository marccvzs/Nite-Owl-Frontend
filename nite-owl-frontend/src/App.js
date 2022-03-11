import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import RestaurantPage from "./RestaurantPage";
import Home from "./Home";
import MyReservations from "./MyReservations";
import Restaurant from "./Restaurant";
import Cuisine from "./Cuisine";
import RestaurantReviews from "./RestaurantReviews";

function App() {
  return (
    <div className="flex">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NavBar />
          <Switch>
            <Route exact path="/restaurants/:cuisine">
              <Cuisine />
            </Route>
            <Route exact path="/restaurants">
              <RestaurantPage />
            </Route>
            <Route exact path="/restaurant/:id">
              <Restaurant />
            </Route>
            <Route exact path="/user/11/reservations">
              <MyReservations />
            </Route>
            <Route exact path="/restaurant/:id/reviews">
              <RestaurantReviews />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
