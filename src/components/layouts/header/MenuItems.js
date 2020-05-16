import React, {useState} from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core'
import {
  ExpandLess,
  ExpandMore} from '@material-ui/icons'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {menuItems} from './menuItem'
import {makeStyles} from '@material-ui/core/styles'

const MenuItems = ({history}) => {
  const classes = useStyle();
  const [open,setOpen]=useState(menuItems.map(item=>item.subMenu.length>0));
  const handleClick = (index,tieneSubMenu)=>{
    if(tieneSubMenu)
      setOpen({...open,[index]:!open[index]})
    else  
      try{
        history.push(menuItems[index].listPath)
      }catch(err){
        console.log("error redireccionando a ",menuItems[index].listPath)
      }
      
  }

  return (
    <List>
      {
        menuItems.map((lsItem,key)=>{
          const tieneSubMenu = lsItem.subMenu.length>0;
          return( 
          <div key={key}>
          <ListItem  className={classes.colorItem} button component='div' onClick={()=>handleClick(key,tieneSubMenu)}>
            <ListItemIcon className={classes.colorItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText  primary={lsItem.listText}/>
            {/*add icon for control subMenu*/}
            {tieneSubMenu && addButtonSubMenu(!open[key])}
          </ListItem>
            {/*add opcions subMenu*/}
            {tieneSubMenu && addSubmenu(lsItem,!open[key],classes)}
          </div> 
        )})
      }
    </List>
  );
}

  export default withRouter(MenuItems);

const useStyle = makeStyles(theme=>({
  colorItem:{
    color:'#e4dde6',
  },
  subMenu:{
    paddingLeft:theme.spacing(4)
  }
}))

const addSubmenu = (items,open,classes) => {
  return(
  <Collapse
    in={open}
    timeot="auto"
    unmountOnExit
  >
    <List   disablePadding>
    {
      items.subMenu.map((item,key) => (
        
          <ListItem key={key} button component={Link} to={item.listPath} className={classes.subMenu}>
            <ListItemIcon >
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
      ))
    }
    </List>
  </Collapse>
  )
}

const addButtonSubMenu = open =>(
  <> 
  {
  open
  ? <ExpandLess /> 
  : <ExpandMore />
  }
  </>
)

