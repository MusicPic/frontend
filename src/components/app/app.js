import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/main.scss';
import Profile from '../profile/profile';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';
import * as profileActions from '../../actions/profile-action';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
      
  <div className='app-hero'>
  <BrowserRouter>
      <div className='app-components'>
          <Header />
          <Route exact path='/dashboard' component={ Dashboard }/>
         
        </div>
      </BrowserRouter> </div>      
      </div>
    );
  }
}


export default App;
