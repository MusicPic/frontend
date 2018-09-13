import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../styles/main.scss';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'; // I dont think this is actually necessary

const theme = createMuiTheme({

});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
         <div className='app'>
         <CssBaseline />
        <div className='app-hero'> </div>
        <BrowserRouter>
          <div className='app-components'>
            <Header/>
              <Route exact path='/dashboard' component={ Dashboard }/>
          </div>
        </BrowserRouter>     
      </div>
      </MuiThemeProvider>
   
    );
  }
}

export default App;
