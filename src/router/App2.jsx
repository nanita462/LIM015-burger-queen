import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../build/css/index.css'; // para aplicar estilo sass

import Home from '../views/Home.jsx';
import WaiterView from '../views/WaiterView.jsx';
import ChefView from '../views/ChefView.jsx';
import Error404 from '../views/Error404.jsx';

import { AuthProvider } from '../context/AuthContext.jsx';
import PrivatePath from '../comp/PrivatePath.jsx';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>

                    {/* <Route exact path='/home' component={Home} /> */}
                    <Route exact path='/' component={Home} />

                    <PrivatePath path='/waiter'>
                        <WaiterView />
                    </PrivatePath>

                    {/* <PrivatePath path='/order_ready'>
                        <OrderReady />
                    </PrivatePath> */}

                    <PrivatePath path='/chef'>
                        <ChefView />
                    </PrivatePath>

                    <Route component={Error404} />
                </Switch >

            </Router >

        </AuthProvider >
    );
}

export default App;