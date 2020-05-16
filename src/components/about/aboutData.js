import React from 'react'
import {FolderOpen, FitnessCenter} from '@material-ui/icons'
import fotoRudy from '../../assets/img/rudy.jpg'
import fotoLeo from '../../assets/img/leo.jpg'
import fotoLuinel from '../../assets/img/luinel.jpg'

const aboutData = {
  resume:`A lo largo de mi carrera he contribuido en múltiples proyectos interactuando con diversas
  tecnologías y equipos de trabajo, en consecuencia me he hecho acreedor de una importante versatilidad
  y perspectiva aplicable al proceso de desarrollo del software. Como profesional de la computación y 
  autodidacta en constante aprendizaje, promuevo buenas prácticas al construir software y entiendo la 
  importancia de aprender para enseñar. 
  Actualmente me desempeño como especialista javascript, específicamente en el uso de React y Node.`,

  button:{
    experience:{
      icon:<FolderOpen/>,
      text:'Experience'
    },
    skills:{
      icon:<FitnessCenter/>,
      text:'Skilss'
    }
  },

  team:[
    {
      foto:fotoRudy,
      linkedin:`https://www.linkedin.com/in/rudy-thereze-19092a93/`,
      alt:'Rudy Thereze'
    },
    {
      foto:fotoLeo,
      linkedin:`https://www.linkedin.com/in/leonel-navarro/`,
      alt:'Leonel Navarro'
    },
    {
      foto:fotoLuinel,
      linkedin:`https://www.linkedin.com/in/luinel-andrade-gascon-5a2742111/`,
      alt:'Luinel Andrade'
    }
  ]
};

export {
  aboutData
}