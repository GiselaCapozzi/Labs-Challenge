import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import Battery20 from '@material-ui/icons/Battery20';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import ImportExport from '@material-ui/icons/ImportExport';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menu: {
        width: 'auto',
        background: '#fff15a',
    }
});

const Menu = ({resultado, nuevo, usado, sinEspecificar, ordena}) => {
    const estilos = useStyles();
    const [state, setState] = useState({
        menu: false,
    });
    

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
        });
    };

    const list = (anchor) => ( 
        <div
            className={clsx(estilos.list, {
                [estilos.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* <List>
                {['NUEVO', 'USADO', 'SIN ESPECIFICAR', 'ORDENAR POR PRECIO'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {
                                text === 'NUEVO' ? <FiberNewIcon onClick = {() => nuevo('new')}/> :
                                    text === 'USADO' ? <Battery20 onClick = {() => usado('used')}/> :
                                        text === 'SIN ESPECIFICAR' ? <SentimentDissatisfiedIcon /> :
                                            <ImportExport />
                            }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            <List>
                <ListItem button onClick = {() => nuevo('new')}>
                    <ListItemIcon>
                    <FiberNewIcon />
                    </ListItemIcon>
                    NUEVO
                </ListItem>
                <ListItem button onClick = {() => usado('used')}>
                    <ListItemIcon>
                    <Battery20 />
                    </ListItemIcon>
                    USADO
                </ListItem>
                <ListItem button onClick = {() => sinEspecificar('not_specified')}>
                    <ListItemIcon>
                    <SentimentDissatisfiedIcon />
                    </ListItemIcon>
                    SIN ESPECIFICAR
                </ListItem>
                <ListItem button onClick = {ordena}>
                    <ListItemIcon>
                    <ImportExport />
                    </ListItemIcon>
                    ORDENAR POR PRECIO
                </ListItem>
            </List>
        </div>
    )

    return (
        <div className = {estilos.menu}>
            {['Menu'].map((anchor) => (
                <React.Fragment key = {anchor}>
                    <Button onClick = {toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor = {anchor} open = {state[anchor]} onClose = {toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Menu;