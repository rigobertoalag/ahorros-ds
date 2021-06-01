import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AddViewPage from './pages/AddViewPage'
import AddAhorro from './pages/AddAhorro'
import RmvAhorro from './pages/RmvAhorro'
import ListAhorros from './pages/ListAhorros'
import ViewAhorroByDate from './pages/ViewAhorroByDate'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <AddViewPage />
        </Route>
        <Route path="/add-ahorro">
          <AddAhorro />
        </Route>
        <Route path="/rmv-ahorro">
          <RmvAhorro />
        </Route>
        <Route path="/list-ahorros">
          <ListAhorros />
        </Route>
        <Route path="/view-ahorro"> {/**FALTA DEL ID DEL DATE */}
          <ViewAhorroByDate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
