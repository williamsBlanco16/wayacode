import React from 'react'
import {
  Home,
  Face,
  AssignmentInd,
  FolderOpen,
  FitnessCenter,
  PeopleOutline,
  Work,
  LocalLibrary,
  ViewComfy,  
  ContactPhone
} from '@material-ui/icons'


const menuItems = [
  {
    listIcon:<Home/>,
    listText:'Home',
    listPath:'/home',
    subMenu:[]
  },
  {
    listIcon:<Face/>,
    listText:'About',
    listPath:'/about',
    subMenu:[
      {
        listIcon:<AssignmentInd/>,
        listText:'Profile',
        listPath:'/about/profile'
      },
      {
        listIcon:<FolderOpen/>,
        listText:'Work Experience',
        listPath:'/about/experience'
      },
      {
        listIcon:<FitnessCenter/>,
        listText:'Skills',
        listPath:'/about/skills'
      }
    ]
  },
  {
    listIcon:<Work/>,
    listText:'Portfolio',
    listPath:'/portfolio',
    subMenu:[
      {
        listIcon:<LocalLibrary/>,
        listText:'Guias',
        listPath:'/portfolio/guias'
      },
      {
        listIcon:<ViewComfy/>,
        listText:'Project',
        listPath:'/projects'
      },
    ]
  },
  {
    listIcon:< ContactPhone/>,
    listText:'contact',
    listPath:'/contact',
    subMenu:[]
  },
];

const redes = {
  github:'https://github.com/williamsBlanco16',
  linkedin:'https://www.linkedin.com/in/williams-blanco-022958143/'
}

export {
  menuItems,
  redes
}; 