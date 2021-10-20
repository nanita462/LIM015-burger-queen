import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//BrowserRouter: conecta la app a la URL del navegador, identifica la navegacion hacia atras/adelante
//Route: ruta
//Switch: estructura de control para cada ruta
import '../build/css/index.css'; // para aplicar estilo sass
import Waiter from '../pages/Waiter.jsx';
import Home from '../pages/Home.jsx';
import ChefMenuPending from '../pages/ChefMenuPending.jsx';
import OrderReady from '../pages/OrderReady.jsx';
import Error404 from '../pages/Error404.jsx';

import { AuthProvider } from '../context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>

      <Router>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/waiter' component={Waiter} />
          <Route exact path='/order_ready' component={OrderReady} />
          <Route exact path='/chef' component={ChefMenuPending} />

          <Route component={Error404} />

        </Switch>

      </Router>

    </AuthProvider>
  );
}

export default App;
