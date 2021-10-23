import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/config.js';

//Creando estado global - context
const AuthContext = React.createContext();

//Hook para acceder a context
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    //Creamos un state para saber cuando termina de cargar la comprobación de onAuthStateChanged
    const [charging, setCharging] = useState(true);

    // Efecto para ejecutar comprobación una sola vez
    useEffect(() => {
        //Comprobamos si hay user
        const cancelSuscription = auth.onAuthStateChanged((user) => {
            // console.log(user);
            setUser(user);
            setCharging(false);
        });
        return cancelSuscription;
    }, []); // []Para que no se ejecute varias veces

    return (
        <AuthContext.Provider value={{ user: user }}>
            {/*Para que user no ingrese hasta comprobar que se haya logueado */}
            {!charging && children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider, useAuth };




