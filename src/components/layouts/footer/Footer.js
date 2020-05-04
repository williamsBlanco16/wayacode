import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import Copyright from './Copyright'

const useStyles = makeStyles((theme) => ({
  root: {
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
    padding: theme.spacing(3, 2),
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
    <div className={classes.root}>
       <AppBar elevation={0} color='transparent' position='fixed' className={classes.AppBar}>
      <footer className={classes.footer}>
        <Button>Linkedin<LinkedInIcon color='primary'/></Button>  
        <Container >
          <Copyright />
        </Container>
      </footer>
    </AppBar>
    </div>
   
  );
}

export default Footer;