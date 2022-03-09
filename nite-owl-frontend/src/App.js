import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import RestaurantPage from './RestaurantPage';
import Home from './Home';
import MyReservations from './MyReservations';

function App() {
  return (
    <div className="flex">
      <NavBar />
      <Switch>
        <Route  path='/restaurants'>
          <RestaurantPage/>
        </Route>
        <Route exact path='/user/:id/reservations'>
          <MyReservations  />
        </Route >
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
