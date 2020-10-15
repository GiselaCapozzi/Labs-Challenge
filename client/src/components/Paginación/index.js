import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    paginacion: {
        background: '#ff9800',
        color: '#000'
    }
  },
}));

const Paginacion = ({contador, pagina, handleChange}) => {
    const estilos = useStyles();
    return (
        <div className = {estilos.root}>
            <Pagination 
                count = {contador}
                page = {pagina}
                onChange = {handleChange}
                className = {estilos.paginacion}
            />
        </div>
    );
};

export default Paginacion;