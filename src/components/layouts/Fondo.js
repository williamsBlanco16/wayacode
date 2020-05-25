import React from 'react';
import { Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import fondoHomeMD from '../../assets/img/fondo-home@2x.png'
import fondoAbout from '../../assets/img/fondo-general.svg'
import fondoExperience from '../../assets/img/back-image.svg'

const Fondo = (props) => {
  const classes = useStyle();
  const {target} = props;
  return (
    <Box 
      component='div'
      className={`${classes[target]} ${classes.common}`}
    >
      {props.children}
    </Box>
  );
}

export default Fondo

const useStyle = makeStyles(theme=>({
  common:{
    width:'100vw',
    minHeight:'100vh',
    backgroundSize:'cover',
    position: 'absolute',
    [theme.breakpoints.down('sm')]:{
      backgroundRepeat: 'round'
    }
    
  },
  home:{
    backgroundImage:`url(${fondoHomeMD})`,
    
  },
  about:{
    backgroundImage:`url(${fondoAbout})`,
  },
  experience:{
    backgroundImage:`url(${fondoExperience})`
  },
  skills:{
    backgroundImage:`url(${fondoHomeMD})`,
    backgroundRepeat: 'unset',
  }

}))