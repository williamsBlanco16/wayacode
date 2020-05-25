import React from 'react'
import {
  Container,
  Button,
  Grid,
  Box
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Typed from 'react-typed'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '90vh',
  },
  main: {
    paddingTop: '18%',
    [theme.breakpoints.down('sm')]:{
      paddingTop: '29vh',
    }
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  titleBrand:{
      fontFamily: 'Rajdhani',
      fontSize: '3.5rem',
      fontWeight: 300
  },
  subTitleBrand:{
    width: 330,
    height: 27,
    fontSize: '1rem',
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
    textAlign: 'center',
    backgroundColor:'#3eb456',
    display:'block',
    marginTop:24,
    "&:hover":{ 
      color:'#3a8eb1'
    }
  }
}));

const HomeMain =()=> {
  const classes = useStyles();
  return (
    <Container component="main" className={classes.main}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Grid container direction='column' alignItems="center" justify='center'>
            <Grid item>
              <Box container='div' className={classes.titleBrand}>
                <Typed 
                  strings={["Way a code"]}
                  typeSpeed={40}
                />
              </Box>
            </Grid>

            <Grid item>
              <Box container='div' className={classes.subTitleBrand}>
                Williams Blanco Software Developer
              </Box>
            </Grid>

            <Grid item>
              <Box component='div' className={classes.subTitleBrand}>
                <Typed 
                    strings={["Javascript","MERN Stack"]}
                    typeSpeed={40} 
                    backSpeed={60} 
                    loop
                  />
              </Box>
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
