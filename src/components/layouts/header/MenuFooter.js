import React from 'react';
import { 
  BottomNavigation, 
  BottomNavigationAction } from '@material-ui/core';
import {
  LinkedIn,
  GitHub
} from '@material-ui/icons'
import {redes} from './menuItem'
import {makeStyles} from '@material-ui/core/styles'

const MenuFooter = () => {
  const classes = useStyle();
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        icon={<LinkedIn/>}
        label="Linkdin"
        component='a' 
        href={redes.linkedin}
        target="_blank"
      />
      <BottomNavigationAction
        icon={<GitHub/>}
        label="GitHub"
        component='a' 
        href={redes.github}
        target="_blank"
      />
    </BottomNavigation>
  );
}

export default MenuFooter;

const useStyle = makeStyles(theme =>({
  root:{
    background:'transparent',
    position:'absolute',
    bottom:0,
    width:'inherit'
  }
}))