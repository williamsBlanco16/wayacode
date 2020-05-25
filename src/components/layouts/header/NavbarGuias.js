import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Hidden,
  Popper,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'
import {Link, withRouter } from 'react-router-dom'

import logoBase from '../../../assets/img/logo-base.png'
import {menuItems} from './menuItem'

const NavbarGuias = ({history})=> {
  const classes = useStyles();
  const optionWithSubMenu = {'About':null,'Portfolio':null}

  const [open, setOpen] = useState(menuItems.map((item,key)=>(item.subMenu.length>0)))
  const [anchorEl, setAnchorEl] = React.useState(optionWithSubMenu);
  
  const handleToggle = (index,subMenu)=>(event)=> {
    if(subMenu){
      setAnchorEl({...anchorEl,[menuItems[index].listText]:event.currentTarget});
      
      const newOpen = open.map((element,key) => key===index?!element:true)

      setOpen(newOpen)
    }else{
      history.push(menuItems[index].listPath)
    }
    
  }
  return (
    <>
      <Hidden smDown>
        <Grid item xs={12}>
          <Grid container justify='center'>
            {menuItems.map((items,key)=>{
              const subMenu = items.subMenu.length > 0;
              return(
                <Grid item key={key} className={classes.link} >
                  <Button 
                    className={classes.text}
                    startIcon={items.listIcon}
                    endIcon={subMenu && <ExpandMore/>}
                    aria-haspopup={subMenu}
                    aria-controls={open ? `${items.listText}-list-grow` : undefined}
                    onClick={handleToggle(key,subMenu)}
                  >
                    {items.listText}
                  </Button> 
                  {/*submenus*/ }
                  {subMenu && addSubmenu(items,open[key],anchorEl[items.listText],classes)}
                </Grid>
              )})
            }
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default withRouter(NavbarGuias);

const addSubmenu = (item,open,anchorEl,classes) =>{
  return(<Popper 
    open={!open}
    transition
    placement='bottom-start' 
    anchorEl={anchorEl}  
    style={{zIndex:10000}}
  >
    <Paper >
      <List disablePadding>
      {
        item.subMenu.map((item,key) => (
          <ListItem 
            key={key} 
            button component={Link} 
            className={classes.subMenu}
            to={item.listPath} >
            <ListItemIcon >
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))
      }
      </List>
    </Paper>
  </Popper>)
}
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
    fontSize:'12px',
    color: '#ffffff',
    "&:hover":{ 
      color:'#3a8eB1',
      backgroundColor:'#ffffff'
    }
  },
  subMenu:{
    "&:hover":{ 
      backgroundColor:'#3a8eB1'
    }
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize:'12px',
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