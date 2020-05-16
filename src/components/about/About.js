import React from 'react'
import Fondo from '../layouts/Fondo'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'

import fotoPerfil from '../../assets/img/fotoPerfil.PNG'
import {aboutData} from './aboutData'

import {makeStyles} from '@material-ui/core/styles'
import {AvatarGroup, Alert} from '@material-ui/lab'
import{
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
  Grid,
  Box} from '@material-ui/core'

const About = () =>{
  const classes = useStyle();
  return (
    <Fondo target='about'>
      <Header/>
      <Card className = {classes.card}>
      <CardHeader
        avatar={
          <Grid container justify='center'><Avatar alt="Williams Blanco" src={fotoPerfil} className={classes.large}/></Grid>
        }
        title={
          <Typography className={classes.title} variant='h1'>
            Williams Blanco 
          </Typography>
        }
      />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <CardContent>
              <Typography variant="body1"  component="p" align='justify'>
                {aboutData.resume}
              </Typography>
            </CardContent>
            <Box >
              <Button
                className={classes.button}
                variant="contained" 
                color="primary"
                startIcon={aboutData.button.experience.icon}
              >
                {aboutData.button.experience.text}
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                startIcon={aboutData.button.skills.icon}
              >
                {aboutData.button.skills.text}
              </Button>
            </Box>
          </Grid>
          <Grid item >
          <Alert severity="info">software development team</Alert>
            <AvatarGroup style={{marginLeft:116}} max={3}>
            
              {aboutData.team.map((item,key)=>(
                
                  <Avatar key={key} alt={item.alt} src={item.foto} component='a' 
                  href={item.linkedin}
                  target="_blank"  />))
              }
            </AvatarGroup>
          </Grid>

        </Grid>
        
      
      </Card>
      <Footer/>
    </Fondo>
  )
}

export default About

const useStyle = makeStyles(theme=>({
  card:{
    width:'80vw',
    minWidth: 300 ,
    margin: '15vh auto',
    background: 'transparent',
    paddingBottom:'4rem',
    [theme.breakpoints.down('sm')]:{
      margin: '8vh auto',
      paddingBottom: '32px'
    }
  },
  large:{
    height: theme.spacing(10),
    width: theme.spacing(10),
    
  },
  title:{
    fontSize: theme.spacing(12),
    opacity: 0.11,
    letterSpacing:8,
    fontFamily:"Rajdhani",
    [theme.breakpoints.down('sm')]:{
      fontSize: theme.spacing(4),
      opacity: 2.3  
    }
  },
  button:{
    margin: theme.spacing(1)
  }
}))