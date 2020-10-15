import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Modal from 'react-modal';
import styled from 'styled-components';
import './card.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        heightMax: 500,
        paddingTop: "100%",
    },
    avatar: {
        background: '#ffeb3b',
        boxShadow: '2px 3px 10px 1px grey',
        display: 'flex',
        marginLeft: 300,
        cursor: 'pointer',
        color: '#000',
        fontWeight: 700,
    },
    content: {
        background: '#ffd54f'
    },
    titulo: {
        fontWeight: 800,
        fontFamily: 'Verdana, Geneva, sans-serif'
    },
    precio: {
        display: 'flex',
        float: 'right',
        margin: 23,
        fontWeight: 700
    },
    stock: {
        marginTop: 50,
        display: 'flex',
        float: 'left',
        fontWeight: 700,
        color: 'grey'
    }
})
const customStyles = {
    content: {
        backgroundColor: "#ffccbc",
    }
}

const ModalContent = styled.div `
    height: 100%;
    width: 100%;
    display: 'flex',

    h1 {
        color: #5c3aff;
    }
`;

const Tarjeta = ({pictures, title, price, thumbnail, sold_quantity, condition }) => {
    const estilos = useStyles();
    const [open, setOpen] = useState(false);


    const openModal = () => {
        setOpen(true); 
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div className = "tarjeta">
            <Card className={estilos.root}>
                <CardMedia
                    className={estilos.image}
                    image={thumbnail}
                    title= {title}
                >
                   <Avatar
                    className = {estilos.avatar}
                    onClick={openModal}
                >+</Avatar>
                </CardMedia>
                <CardContent
                    className = {estilos.content}
                >
                    <Typography
                        className = {estilos.titulo}
                    >
                        {title}
                    </Typography>
                    <Typography
                        className = {estilos.precio}
                    >
                        ${price}
                    </Typography>
                    <Typography
                        className = {estilos.stock}
                    >
                        Stock Disponible: {sold_quantity}
                    </Typography>
                    <Typography>
                        Condicion: {condition}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
                <div>
                    <Modal 
                        isOpen={open} 
                        onRequestClose={closeModal}
                        style = {customStyles}
                        >
                        <ModalContent>
                           
                        </ModalContent>
                    </Modal>
                </div>
        </div>
    );
};

export default Tarjeta;