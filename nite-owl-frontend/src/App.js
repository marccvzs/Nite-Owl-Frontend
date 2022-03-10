import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import RestaurantPage from './RestaurantPage';
import Home from './Home';
import MyReservations from './MyReservations';
import Restaurant from './Restaurant';
import Cuisine from './Cuisine';
import UserReviews from './UserReviews';

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
          <Route path='/restaurants/:cuisine'>
              <Cuisine/>
            </Route>
            <Route exact path="/restaurants">
              <RestaurantPage />
            </Route>
            <Route path='/restaurant/:id'>
              <Restaurant/>
            </Route>
            <Route exact path="/user/:id/reservations">
              <MyReservations />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
