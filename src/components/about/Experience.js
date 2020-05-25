import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {
  Typography,
  Box
} from '@material-ui/core'

import {aboutData} from './aboutData'

import Header from '../layouts/header/Header';

const useStyles = makeStyles(theme =>({
  mainContainer:{
    background: "#233"
  },
  timeLine:{
    position:"relative",
    padding:"1rem",
    margin: "0 auto",
    "&:before":{
      content:"''",
      position:"absolute",
      height:"100%",
      border:"1px solid tan",
      right: "40px",
      top:0
    },
    "&:after":{
      content: "''",
      diplay:"table",
      clear:"both"
    },
    [theme.breakpoints.up("md")]:{
      padding:"2rem",
      "&:before":{
        left:"calc(50% - 1px)",
        right:"auto",
      }
    }
  },
  timeLineItem:{
    paddding: "1 rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear:"both",
    "&:after":{
      content: "''",
      position: "absolute"
    },
    "&:before":{
      content:"''",
      position:"absolute",
      right: "-0.625rem",
      top:"calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#328345 #328345 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]:{
      width:"44%",
      margin:"1rem",
      "&:nth-of-type(2n)":{
        float:"right",
        margin:"1rem",
        borderColor:"tan"
      },
      "&:nth-of-type(2n):before":{
        right:"auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #3eb456 #3eb456" 
      }
    }
  },
  timeLineYear:{
    textAlign: "center",
    maxWidth: "9.375rem",
    margin:"0 3rem 0 auto",
    background: "#3eb456",
    fontFamily: 'Rajdhani',
    color:"white",
    lineHeight: 1,
    fontSize:'20px',
    padding:"0.5rem 0 1rem",
    "&:before":{
      display:"none"
    },
    [theme.breakpoints.up("md")]:{
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)":{
        float: "none",
        margin:"0 auto",
      },
      "&:nth-of-type(2n):before":{
        display:"none"
      }
    }
  },
  heading:{
    color:"#328345",
    padding:"3rem 0",
    textTransform:"uppercase",
    marginTop:'26px',
    fontFamily: 'Rajdhani',
  },
  subHeading:{
    color:"white",
    padding:"0",
    textTransform:"uppercase",
    borderRadius:'0.5rem',
    fontFamily: 'Rajdhani',
  }
 
}));
const Experience = () => {
  const classes = useStyles()
  const {experience} = aboutData;
  return (
    <Box >
    <Header background={true}/>
    <Box componet="header" className={classes.mainContainer}>
      <Typography 
        className={classes.heading} 
        variant="h4" 
        align="center">
        working experience
      </Typography>
      <Box component='div' className={classes.timeLine}>
        {experience.map((exp,key)=>(
          <React.Fragment key={key}>
            <Typography 
              variant="h2" 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                {`${exp.yearInit} - ${exp.yearEnd}`}
            </Typography>
            <Box 
              componet="div" 
              className={classes.timeLineItem}>
              <Typography 
                variant="h5"    
                aligh="center"
                className={classes.subHeading}
              >
                {exp.cargo}
              </Typography>

              <Typography   
                variant="body1" 
                aligh="center" 
                style={{color:"tomato",fontFamily: 'Rajdhani'}}>
                {exp.company}
              </Typography>

              <Typography 
                variant="subtitle1" 
                aligh="center"
                style={{color:"tan"}}>
                {exp.description}
              </Typography>
          </Box>
        </React.Fragment>
      )).reverse()}
    </Box>
    </Box>
    </Box>
  );
}

export default Experience;
