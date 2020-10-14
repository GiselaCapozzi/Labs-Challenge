import React, { useState, useEffect } from 'react';
import './cards.css';
import Tarjeta from '../Tarjeta';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        background: "#cfd8dc"
    }
});

const Cards = ({ resultado }) => {
    // console.log(resultado)
    const [listaProductos, setListaProductos] = useState([]);
    const estilo = useStyles();

    useEffect(() => {
        setListaProductos(resultado);
    }, [resultado]);

    if (!resultado) {
        return (
            <div className="cards">No se encontro producto...</div>
        )
    } else {
        return (
            <div className="cards">
                <Grid 
                    container 
                    justify="center"
                    className = {estilo.root}
                >
                {
                    listaProductos.map((e) => (
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
                }
                </Grid>
            </div>
        );
    }
};

export default Cards;