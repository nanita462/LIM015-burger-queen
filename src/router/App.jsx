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
import PrivatePath from '../components/PrivatePath.jsx';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>

          {/* <Route exact path='/home' component={Home} /> */}
          <Route exact path='/' component={Home} />

          <PrivatePath path='/waiter'>
            <Waiter />
          </PrivatePath>

          <PrivatePath path='/order_ready'>
            <OrderReady />
          </PrivatePath>

          <PrivatePath path='/chef'>
            <ChefMenuPending />
          </PrivatePath>

          <Route component={Error404} />
        </Switch >

      </Router >

    </AuthProvider >
  );
}

export default App;






