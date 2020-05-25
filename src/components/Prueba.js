import React from 'react';

import Header from '../components/layouts/header/Header';
import {makeStyles} from '@material-ui/core/styles'
import { Drawer } from '@material-ui/core';

const drawerWidth = 240;

const Prueba = () => {
  const classes = useStyles();
  return (
    <div>
        <Header background={true}/>
        <Drawer
          className={classes.drawer}
          variant="permanent" 
          anchor="left"
        >
        </Drawer>
    </div>
  );
}

export default Prueba;

const useStyles = makeStyles(theme=>({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:'#f1f1f'
  }
}))