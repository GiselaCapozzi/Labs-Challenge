import React, { useState, useEffect } from 'react';
import Menu from '../../pages/Menu';
import './cards.css';
import Tarjeta from '../Tarjeta';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from "sweetalert";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        background: "#cfd8dc"
    }
});

const Cards = ({ resultado }) => {
    console.log(resultado[0])
    const [listarProductos, setListarProductos] = useState([]);
    const [ordenar, setOrdenar] = useState([]);
    const [precio, setPrecio] = useState(true);
    const estilo = useStyles();

    const nuevo = () => {
        setListarProductos([]);
        var nuevo = [];
        for (let i = 0; i < resultado.length; i++) {
            if (resultado[i].condition === 'new') {
                nuevo.push(resultado[i]);
                setListarProductos(nuevo);
                console.log(nuevo)
            }
        }
        if (nuevo.length === 0) {
            swal("No se pudo encontrar esa condición")
        }
    }

    const usado = () => {
        var usado = [];
        for (let i = 0; i < resultado.length; i++) {
            if (resultado[i].condition === 'used') {
                usado.push(resultado[i]);
                setListarProductos(usado);
            }
        }
        if (usado.length === 0) {
            swal('No se pudo encontrar esa condición')
        }
    }

    const sinEspecificar = () => {
        var sinEspecificar = [];
        for (let i = 0; i < resultado.length; i++) {
            if (resultado[i].condition === 'not_specified') {
                sinEspecificar.push(resultado[i]);
                setListarProductos(sinEspecificar);
            }
        }
        if (sinEspecificar.length === 0) {
            swal('No se pudo encontrar esa condición')
        }
    }

    const ordena = () => {
        if (precio) {
            setPrecio(false);
            setOrdenar(resultado.reverse());
            return precio; 
        }else{
            setPrecio(true);
            return precio;
        }
    }

    useEffect(() => {
        setListarProductos(resultado);
    }, [resultado]);

    if (resultado) {
        return (
            <div className="cards">
                <Menu
                    resultado={resultado}
                    nuevo={nuevo}
                    usado={usado}
                    sinEspecificar={sinEspecificar}
                    ordena={ordena}
                />
                <Grid
                    container
                    justify="center"
                    className={estilo.root}
                >
                    {
                        listarProductos && precio ? (
                            listarProductos.map((e) => (
                                <Grid item md={4} key={e.id}>
                                    <Tarjeta
                                        id={e.id}
                                        title={e.title}
                                        price={e.price}
                                        thumbnail={e.thumbnail.replace("I.jpg", "B.jpg")}
                                        sold_quantity={e.sold_quantity}
                                        condition={e.condition}
                                    // pictures = {e.pictures}
                                    />
                                </Grid>
                            ))
                        ) : listarProductos && precio === false ? (
                            listarProductos.map(e => (
                                <Grid item md={4} key={e.id}>
                                    <Tarjeta
                                        id={e.id}
                                        title={e.title}
                                        price={e.price}
                                        thumbnail={e.thumbnail.replace('I.jpg', 'B.jpg')}
                                        sold_quantity={e.sold_quantity}
                                        condition={e.condition}
                                    />
                                </Grid>
                            ))
                        ) : (
                                    <div>..............</div>
                                )}
                </Grid>
            </div>
        );
    } else {
    
    return (
        <div className="cards">No se encontro producto...</div>
    )}
};

export default Cards;