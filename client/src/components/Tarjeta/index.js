import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { yellow } from '@material-ui/core/colors';
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
    }
})
const customStyles = {
    content: {
        backgroundColor: "#eee"
    }
}


const Tarjeta = ({title, price, thumbnail, sold_quantity, codition }) => {
    const estilos = useStyles();
    const [open, setOpen] = useState(false);

    const ModalContent = styled.div `
        height: 100%;
        width: 100%;
        h1 {
            color: #5c3aff;
        }
    `;

    const openModal = () => {
        setOpen(true); 
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div>
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
                <CardContent>
                    <Typography>
                        {title}
                    </Typography>
                    <Typography>
                        ${price}
                    </Typography>
                    <Typography>
                        Stock Disponible: {sold_quantity}
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
                            <h1> Funciona!! </h1>
                        </ModalContent>
                    </Modal>
                </div>
        </div>
    );
};

export default Tarjeta;