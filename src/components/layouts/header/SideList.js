import React from 'react';
import {
  Box,
  Avatar, 
  Divider
  } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import fotoPerfil from '../../../assets/img/fotoPerfil.PNG'
import MenuItems from './MenuItems'
import MenuFooter from './MenuFooter';

const SideList = () => {
  const classes = useStyle();
  return (
    <Box
      className={classes.menuSliderContainer}
      componet='div'
    >
      <Avatar
        src={fotoPerfil}
        alt='Williams Blanco'
        className={classes.avatar}
      />
      
      <Divider/>

      <MenuItems/>
      
      <MenuFooter/>
    </Box>
  );
}

export default SideList;

const useStyle = makeStyles(theme =>({
  menuSliderContainer:{
    display:'flow-root',
    width:'60vw',
    height:'100vh',
    background: 'linear-gradient(to top, #3eb456 , #19546d)',
  },
  avatar:{
    display:'block',
    width:theme.spacing(10),
    height: theme.spacing(10),
    margin:'0.5rem auto'
  }
  
}))