import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import {
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider
} from '@material-ui/core/styles';

import Header from './components/layouts/Header'
import Footer from './components/layouts/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';

import './App.css';

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
      'Open Sans',
       '-apple-system', 
       'BlinkMacSystemFont', 
      'Segoe UI', 
      'Roboto', 
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
    <Header/>
      <BrowserRouter>
          <Switch>
            <Route exact path={['/','/home']} component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
