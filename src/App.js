import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import Home from './components/home/Home'
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Skills from './components/about/Skills'
import Experience from './components/about/Experience';

import Test from './components/Test'

import './App.css';
import Guias from './components/portfolio/Guias';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#3a8eB1'
    },
    secundary:{
      main:'#3EB456'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Open Sans',
       '-apple-system', 
       'BlinkMacSystemFont', 
      'Segoe UI',  
      'Oxygen',
      'Ubuntu', 
      'Cantarell', 
      'Fira Sans', 
      'Droid Sans', 
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Switch>
            <Route exact path={['/','/home']} component={Home}/>
            <Route path='/about/profile' component={About}/>
            <Route path='/about/experience' component={Experience}/>
            <Route path='/about/skills' component={Skills}/>
            <Route path='/portfolio/guias' component={Guias}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/test' component={Test}/>
          </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
