import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Pagination from '@material-ui/lab/Pagination';
import { ThemeConsumer } from 'styled-components';

const useStyles = makeStyles({
    root: {
        '& > *': {
            marginTop: ThemeConsumer.spacing(2),
        },
    },
});

const Paginacion = ({contador, page, handleChange}) => {
    const estilos = useStyles();
    return (
        <div className = {estilos.root}>
            <Pagination 
                count = {contador}
                page = {page}
                onChange = {handleChange}
            />
        </div>
    );
};

export default Paginacion;