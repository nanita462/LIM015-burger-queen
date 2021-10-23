import React, { useState } from 'react';
import '../build/css/index.css'; // para aplicar estilo sass
import logo from '../assets/logoBQ.png';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config.js';

function LogIn() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        // console.log(e.target.name);
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //cambiarEstadoAlerta(false);
        //cambiarAlerta({});

        // console.log(email, password);
        if (email === '' || password === '') {
            //cambiarEstadoAlerta(true)
            //cambiarAlerta({
            //     tipo: 'error',
            //         mensaje: 'Por favor completa los datos',
            // });
            console.log('Vacío')
            return;
        }
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log('Autenticada')
            if (email === 'mesero@bq.com') {
                history.push('/waiter')
            } else if ((email === 'chef@bq.com')) {
                history.push('/chef')
            }
        } catch (error) {
            // cambiarEstadoAlerta(true);
            console.log(error);
        }

    }
    return (
        <section className="secHome">
            <section className="secHome__img">
                <img src={logo} className="secHome__img__logo" alt="logoBQ" />
            </section>
            <section className="secHome__form">
                <h2>Iniciar sesión</h2>
                <form className="formLogin" onSubmit={handleSubmit}>
                    <input
                        className="formLogin__name"
                        value={email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo"
                        required
                    />

                    <input
                        className="formLogin__name"
                        value={password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        required
                    />

                    <section className="formLogin__secError"></section>

                    <input className="formLogin__submit" type="submit" value="Ingresar" />
                </form>
            </section>
        </section>
    );
}

export default LogIn;


















