import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import RestaurantPage from './RestaurantPage';
import Home from './Home';
import MyReservations from './MyReservations';
import Restaurant from './Restaurant';

function App() {
  return (
    <div className="flex">
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
=======
        <Route  path='/restaurants'>
          <RestaurantPage/>
        </Route>
        <Route path='/restaurant/:id'>
          <Restaurant/>
        </Route>
        <Route exact path='/user/:id/reservations'>
          <MyReservations  />
        </Route >
        <Route exact path='/'>
>>>>>>> new-features
          <Home />
        </Route>
        <Route>
          <NavBar />
          <Switch>
            <Route path="/restaurants">
              <RestaurantPage />
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
