import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import waiterView from "../views/waiter/waiterView.jsx";
import ChefView from "../views/chef/ChefView.jsx";
import Home from "../views/home/home.jsx";
import Rol from "../views/rol/rol.jsx";
import Error404 from "../views/404/404.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rol" component={Rol} />
        <Route path="/waiterOrder" component={waiterView} />
        <Route path="/chefOrder" component={ChefView} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
