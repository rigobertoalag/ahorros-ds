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

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <AddViewPage />
          </Route>
          <Route path="/add-ahorro">
            <AddAhorro />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
