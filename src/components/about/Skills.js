import React from 'react'
import {
  Card,
  CardMedia,
  Button,
  Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import Fondo from '../layouts/Fondo'
import SkillImg from '../../assets/img/javascriptRoadMap1.svg'

const useStyles= makeStyles(theme=>({
  card:{
    marginTop:'13vh',
    backgroundColor:'transparent',
  },
  media:{
    width:'80%',
    height:'80%',
    margin:'auto'
  },
  heading:{
    backgroundColor:"#3eb456",
    marginTop:'1rem',
    marginLeft:'42%',
    fontFamily: 'Rajdhani',
    fontSize:'2vw'
  }
}));

 const Skills = () => {
  const classes = useStyles();
   return (
    <Fondo target='skills'>
      <Header background={true}/>
      <Card className={classes.card}>
        <Button className={classes.heading} >
         My Skills
        </Button>
          <CardMedia
            component="img"
            alt="Skils"
            height="80%"
            width="80%"
            image={SkillImg}
            title="skills"
            className={classes.media}
          />
      </Card>
  
      <Footer/>
    </Fondo>
  )
}

export default Skills;




