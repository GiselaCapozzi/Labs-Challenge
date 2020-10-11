import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-modal';
import styled from 'styled-components';
import './card.css';

const Tarjeta = ({
    thumbnail,
    title,
    price,
    condition,
    sold_quantity
}) => {

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const ModalContent = styled.div`
    height:50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: #000;
    }
    `;

    return (
        <div className="tarjeta">
            <Card>
                <CardActionArea>
                    <CardMedia
                        image={thumbnail}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            ${price}
                        </Typography>
                        {
                            sold_quantity ? (
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Stock= {sold_quantity}
                                </Typography>
                            ) : (
                                    <Typography>
                                        Sin Stock
                                    </Typography>
                                )}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => openModal()}
                    >
                        MÁS DETALLE
                    </Button>
                    <div>
                        <Modal isOpen = {open} onRequestClose = {closeModal}>
                                <ModalContent>
                                    <h1>Funciona!!</h1>
                                </ModalContent>
                        </Modal>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
};

export default Tarjeta;