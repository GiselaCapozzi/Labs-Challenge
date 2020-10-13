import React, { useState, useEffect } from 'react';
import './cards.css';
import Tarjeta from '../Tarjeta';

const Cards = ({resultado}) => {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        setListaProductos(resultado);
      }, [resultado]);
    
    if (!resultado) {
        return(
            <div className = "cards">No se encontro producto...</div>
        )    
}else{
    return (
        <div className = "cards">  
        Cards
               {
                   listaProductos.map((e) => (
                       <Tarjeta
                        id = {e.id}
                        title = {e.title}
                        price = {e.price}
                        thumbnail = {e.thumbnail.replace("I.jpg", "B.jpg")}
                        sold_quantity = {e.sold_quantity}
                        condition = {e.condition}
                       />
                   ))
               }
        </div>
    );
}
};

export default Cards;