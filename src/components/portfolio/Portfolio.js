import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

import fondoPortafolio from '../../assets/img/fondo-portafolio.png'

import{ 
  Grid, 
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container
 }from '@material-ui/core'

 const useStyles = makeStyles({
  root: {
    paddingTop:'8%',
    flexGrow: 1,
    height:'100vh'
  },
  media: {
    height:'60vh'
  },

  card:{
    padding: '8px',
    height:'80vh'
  }
});

 const PortFolio = () => {
  const classes = useStyles();
  return (
    <Container style={{backgroundImage:`url(${fondoPortafolio})`, backgroundSize:'cover', width:'100vw', height:'100vh'}} className={classes.root}>
      <Grid container spacing={3} justify='space-around' >
      <Grid 
        item
        xs={12}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/56/5e/ab/565eab102c75d5ad067c0b6881e80487.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                WayaCode
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                Frontend | ReactJS | material-ui
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                Backend| nodeJS| API github |Express
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid 
        item
        xs={12}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/56/5e/ab/565eab102c75d5ad067c0b6881e80487.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                WayaCode
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frontend: ReactJS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Backend: Nodejs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid 
        item
        xs={12}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/56/5e/ab/565eab102c75d5ad067c0b6881e80487.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                WayaCode
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frontend: ReactJS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Backend: Nodejs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid 
        item
        xs={12}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/56/5e/ab/565eab102c75d5ad067c0b6881e80487.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                WayaCode
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frontend: ReactJS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Backend: Nodejs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid 
        item
        xs={12}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/56/5e/ab/565eab102c75d5ad067c0b6881e80487.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                WayaCode
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frontend: ReactJS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Backend: Nodejs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid 
        item
        xs={12}
        sm={4}
        md={3}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://i.pinimg.com/236x/56/5e/ab/565eab102c75d5ad067c0b6881e80487.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                WayaCode
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frontend: ReactJS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Backend: Nodejs
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

    
      

       

    </Grid>
    </Container>
  )
}

export default PortFolio
