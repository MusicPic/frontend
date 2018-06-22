import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../styles/main.scss';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      
  <div className='app-hero'> </div>
  <BrowserRouter>
      <div className='app-components'>
          <Header />
          <Route exact path='/dashboard' component={ Dashboard }/>
        </div>
      </BrowserRouter>     
  </div>
    );
  }
}

export default App;
