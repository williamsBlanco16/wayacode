import React,{useState} from 'react';
import { SwipeableDrawer, IconButton } from '@material-ui/core';
import {Menu} from '@material-ui/icons'
import SideList from './SideList';

const MobileLeftMenu = () => {
  const [open,setOpen] = useState(false)
  const handlerOnClose = (state) =>{
    setOpen(state);
  }
  return (
    <IconButton onClick={()=>handlerOnClose(true)}>
      <Menu/>

      <SwipeableDrawer
        open={open}
        onOpen={()=>{handlerOnClose(true)}}
        onClose={()=>handlerOnClose(false)}
      > 
        <SideList/>
      </SwipeableDrawer>
      
    </IconButton>
  );
}

export default MobileLeftMenu;
