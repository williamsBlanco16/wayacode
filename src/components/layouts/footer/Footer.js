import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import Copyright from './Copyright'

import {redes} from '../header/menuItem'

const useStyles = makeStyles((theme) => ({
  rootf: {
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    backgroundColor:'transparent',
    
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    marginTop: 'auto',
    backgroundColor:'transparent'
    
  },  
  AppBar:{
    top: 'auto',
    bottom: 0,
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component = 'div' className={classes.rootf}>
       <AppBar elevation={0} color='transparent' position='fixed' className={classes.AppBar}>
      <Box component='footer' className={classes.footer}>
        <IconButton 
          component='a' 
          href={redes.linkedin}
          target="_blank"
        >
          <LinkedInIcon color='primary'/>
        </IconButton> 
        <IconButton 
          component='a' 
          href={redes.github}
          target="_blank"
        >
          <GitHubIcon/> 
        </IconButton>  
        <Container >
          <Copyright />
        </Container>
      </Box>
    </AppBar>
    </Box>
   
  );
}

export default Footer;