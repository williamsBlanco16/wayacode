import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, 
  Toolbar,
  Grid,
  Hidden,
  Box} from '@material-ui/core'
import MobileLeftMenu from './MobileLeftMenu'
import NavbarDesktop from './NavbarDesktop';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    flexWrap: 'wrap',
  }
}));

const Header = ({history})=> {
  const classes = useStyles();

  return (
    <Box component='nav' className={classes.root}>
      <AppBar 
        color='transparent'
        elevation={0}
        position='absolute'>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            {/*Responsive Desktop smDow*/}
            <NavbarDesktop/>
          </Grid>
          {/*mobile*/}
          <Hidden mdUp>
            <MobileLeftMenu/>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

