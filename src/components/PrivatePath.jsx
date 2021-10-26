// import React from 'react'
// import { useAuth } from '../context/AuthContext.jsx'
// import { Route, Redirect } from 'react-router-dom';
// // import Home from '../pages/Home.jsx';
// // import Error404 from '../pages/Error404.jsx';

// const PrivatePath = ({ children, ...restProperties }) => {
//     const { user } = useAuth();
//     if (user) {
//         return <Route {...restProperties}>{children}</Route>
//     } else {
//         // <Redirect to="/home" />
//         <Redirect to="/" />
//     }
// }

// export default PrivatePath;