import React from 'react'
import {
  Container,
  Typography,
  Button,
  Grid
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '90vh',
  },
  main: {
    paddingTop: '18%',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  titleBrand:{
      fontFamily: 'Rajdhani',
      fontSize: 66,
      fontWeight: 300
  },
  subTitleBrand:{
    width: 330,
    height: 27,
    fontSize: 20,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
  },
  btnPortafolio:{
    width: 156,
    height: 42,
    fontSize: 16,
    fontWeight: 300,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
    backgroundColor:'#3eb456',
    display:'block',
    marginTop:24
    
  }
}));

const HomeMain =()=> {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
        <Grid container direction='column' alignItems="center" justify='center'>
        <Grid item>
          <div className={classes.titleBrand}>
          Way a code
          </div>
        </Grid>

        <Grid item>
        <div className={classes.subTitleBrand}>
          Williams Blanco Software Developer
        </div>
        </Grid>

        <Grid item >
        <Button mt={24} className={classes.btnPortafolio}>Portafolio</Button>
        </Grid>
      </Grid>
  
        </Grid>
      </Grid>
    </Container>
  )
}
export default HomeMain;
