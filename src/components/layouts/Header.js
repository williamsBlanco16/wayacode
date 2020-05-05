import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, 
  Toolbar,
  Typography,
  Grid,
  Button,
  IconButton,

} from '@material-ui/core'
import {Link as RouterLink } from 'react-router-dom'

import logoBase from '../../assets/img/logo-base.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img:{
    width:'66%'
  },
  text:{
    color: '#ffffff',
    "&:hover":{ 
      color:'#3a8eB1',
      backgroundColor:'#ffffff'
    }
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontFamily: 'Rajdhani',
    
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  sinHover:{
    "&:hover":{ 
      backgroundColor:'transparent'
    }
  
  }
  
}));

const Header = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar 
        color='transparent'
        elevation={0}
        position='absolute'>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item  xs={6}>  
                <Button className={classes.sinHover}>
                  <img className={classes.img} src={logoBase} alt="logo"/>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid className={classes.link} item><Button className={classes.text}>HOME</Button> </Grid>
                  <Grid className={classes.link} item><Button className={classes.text}>PORTAFOLIO</Button></Grid>
                  <Grid className={classes.link} item><Button className={classes.text}>ABOUT</Button></Grid>
                  <Grid className={classes.link} item><Button className={classes.text}>CONTACTO</Button></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;