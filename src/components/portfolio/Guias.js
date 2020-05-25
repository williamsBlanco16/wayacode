import React from 'react';

import {makeStyles} from '@material-ui/core/styles'
import { 
  Drawer, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Divider,
  Button} from '@material-ui/core';

  import {
    ExpandLess,
    ExpandMore,
    GitHub as GitHubIcon  } from '@material-ui/icons'

import Header from '../layouts/header/Header';
import NavbarGuias from '../layouts/header/NavbarGuias'

import {guias as guiasItems} from './guiasItems'
import logoBase from '../../assets/img/logo-base.png'
import { height } from '@material-ui/system';

const drawerWidth = 240;

const Guias = () => {
  const classes = useStyles();
  return (
    <div>
        <Header background={true} navBarGuias={<NavbarGuias/>}/>
        <Drawer
          className={classes.drawer}
          variant="permanent" 
          anchor="left"
        >
          <header className={classes.appBarStyle}>
            <Button className={classes.btnLogo}>
              <img className={classes.img} src={logoBase} alt="logo"/>
            </Button>
          </header> 
          <Divider/>  
          {
            guiasItems.map((guia,key)=>(
              <ListItem key={key}>
                <ListItemText primary={guia.titulo}/>
                <ListItemIcon>
                 <ExpandMore/>
                </ListItemIcon>
              </ListItem>
            ))
          }
        </Drawer>
        <Drawer
          className={classes.drawer}
          variant="permanent" 
          anchor="right"
        >
          <header className={classes.appBarStyleRight}>
            <Button 
              className={classes.btnLogo,classes.mt}
              startIcon={<GitHubIcon/>}>
                Edit on GitHub
            </Button>
          </header> 
          <Divider/>  
          {
            guiasItems.map((guia,key)=>(
              <ListItem key={key}>
                <ListItemText primary={guia.titulo}/>
                <ListItemIcon>
                 <ExpandMore/>
                </ListItemIcon>
              </ListItem>
            ))
          }
        </Drawer>
    </div>
  );
}

export default Guias;

const useStyles = makeStyles(theme=>({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appBarStyle:{
    background:'#19546d',
    height:64,
    textAlign:'center'
  },
  appBarStyleRight:{
    background:'#3eb456',
    height:64,
    textAlign:'center'
  },
  mt:{
    marginTop:14
  },
  btnLogo:{
      "&:hover":{ 
        backgroundColor:'transparent'
      },
  },
  img:{
    width:'66%'
  }
}))