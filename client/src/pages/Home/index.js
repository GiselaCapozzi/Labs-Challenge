import React from 'react';
import './home.css';
import meli from '../../meli.png';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
    return (
        <div className = "contenedor">
            <img 
                className = "meli"
                src = {meli}
                alt = {meli}
            />
            <button
                className = "boton"
                onClick = {() => history.push("/products")}
            >
                INGRESAR
            </button>
        </div>
    );
};

export default Home;