import React from 'react';
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme=>({
  particlesCanva:{
    position:"absolute"
  }
}))
const ParticlesCustom = () => {
  const classes = useStyles()
  return (
    <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles:{
            number:{
              value:45,
              density:{
                enable:true,
                value_area:600
              }
            }
          }
        }}
      />
  );
}

export default ParticlesCustom;
