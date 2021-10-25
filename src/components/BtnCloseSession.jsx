import React from 'react';
import { auth } from '../firebase/config.js';
import { useHistory } from 'react-router';

const BtnCloseSesion = () => {
    const history = useHistory();
    const closeSesion = async () => {
        try {
            await auth.signOut();
            //history.push('/home');
            history.push('/');
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {/* *****CAMBIE BUTTON POR H2 PARA QUE SE VEA MEJOR HEADER en waiter y chef*/}
            <h2 className="btnClose" as="button" onClick={closeSesion} >
                <i className="fas fa-sign-out-alt"></i>Cerrar Sesión
            </h2>
        </>
    );
}
export default BtnCloseSesion;





