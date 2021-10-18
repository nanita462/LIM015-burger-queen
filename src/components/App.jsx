import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../build/css/index.css'; // para aplicar estilo sass
import Waiter from './Waiter.jsx';
import Users from './Users.jsx'
import Home from './Home.jsx';
import chefMenuPending from './ChefMenuPending.jsx';

function App() {
  return (
  <BrowserRouter>
  <>
   <main>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/users'  component={Users}/>
        <Route path='/waiter'  component={Waiter}/>
        <Route path='/chef'  component={chefMenuPending}/>

      </Switch>
    </main>
  </>
  </BrowserRouter>

  );
}

export default App;
