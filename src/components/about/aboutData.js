import React from 'react'
import {FolderOpen, FitnessCenter} from '@material-ui/icons'
import fotoRudy from '../../assets/img/rudy.jpg'
import fotoLeo from '../../assets/img/leo.jpg'
import fotoLuinel from '../../assets/img/luinel.jpg'

const aboutData = {
  resume:`A lo largo de mi carrera he contribuido en múltiples proyectos, interactuando con diversas
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
  ],
  experience:[
    {
      yearInit:'Abr de 2015',
      yearEnd:'Jun de 2015',
      company:'Corporación Sybven',
      cargo:'javascript developer',
      description:[
        'Desarrollar aplicaciones web y móviles bajo la plataforma Kony.',
        'Adaptar e integrar soluciones en JavaScript y Java.',
      ],

    },
    {
      yearInit:'Jul de 2015',
      yearEnd:'feb de 2017',
      company:'Corporación Sybven',
      cargo:'Líder Técnico',
      description:[
        'Aplicar marco de trabajo Scrum en los proyectos.',
        'Dar soluciones técnicas a proyectos web y móviles, desarrollados en la plataforma Kony.',
        'Apoyar en la elaboración de las planificaciones de los proyectos.',
        'Liderar equipos de desarrollo.',
        'Guiar al equipo de desarrollo para lograr los objetivos.',
        'Crear y asignar actividades de desarrollo.',
        'Desarrollar aplicaciones bajo el IDE Kony Visualizer Enterprise.',
        'Hacer seguimiento de actividades asignadas al equipo.',
        'Remover impedimentos que dificulten el avance en el desarrollo de los proyectos.',
        'Publicar aplicaciones (ios, android) y puesta en producción de aplicaciones web.',
        'Llevar a cabo reuniones con los clientes.',
        'Realizar manuales, guías y documentación técnica asociado al proceso de desarrollo.',
        'Realizar y establecer transferencias de conocimiento de los procesos realizados durante el desarrollo del software.'
      ]
    },
    {
      yearInit:'Mar de 2017',
      yearEnd:'Feb de 2018',
      company:'Corporación Sybven',
      cargo:'Scrum Master/Líder Técnicot',
      description:[
        'Liderar el marco de trabajo SCRUM en los desarrollos de software.',
        'Entrenar y asesorar a todas las áreas para facilitar la adopción y madurez dentro de la organización en metodologías ágiles.',
        'Liderar la organización en las ejecuciones de ceremonias asociadas al marco de trabajo SCRUM.',
        'Guiar al equipo para aprovechar al máximo la auto-organización.',
        'Remover impedimentos que dificulten el avance en el desarrollo de los proyectos.'
      ],

    },
    {
      yearInit:'Mar de 2017',
      yearEnd:'Feb de 2018',
      company:'Corporación Sybven',
      cargo:'Scrum Master/Líder Técnico',
      description:[
        'Liderar el marco de trabajo SCRUM en los desarrollos de software.',
        'Entrenar y asesorar a todas las áreas para facilitar la adopción y madurez dentro de la organización en metodologías ágiles.',
        'Liderar la organización en las ejecuciones de ceremonias asociadas al marco de trabajo SCRUM.',
        'Guiar al equipo para aprovechar al máximo la auto-organización.',
        'Remover impedimentos que dificulten el avance en el desarrollo de los proyectos.'
      ],

    },
    {
      yearInit:'Abr de 2019',
      yearEnd:'Jun de 2020',
      company:'Saraworld',
      cargo:'Full stack senior developer',
      description:[
        `Como miembro del equipo saraworld, estuve encargo del mantenimiento general de aplicación,
        atención de incidencias y de desarrollar los siguientes módulos:
        Informes.
        versión web-mobile.
        Comisiones.
        Mediante el uso de las siguientes herramientas:
        Spring Boot Framework
        Thymeleaf
        SQL server
        Experiencia Laboral
        Bootstrap
        Javascript`
      ],

    },
    
  ]
};

export {
  aboutData
}