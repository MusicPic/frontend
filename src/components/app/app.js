import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/main.scss';
import Profile from '../profile/profile';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';
import * as profileActions from '../../actions/profile-action';
import {MDCComponent, MDCFoundation} from '@material/base';

class App extends React.Component {
  render() {
    return (
      <div className="app">

      <BrowserRouter>
      <div>
          <Header />
          <Route exact path='/dashboard' component={ Dashboard }/>
         
        </div>
      </BrowserRouter>       
      </div>
    );
  }
}


export default App;
