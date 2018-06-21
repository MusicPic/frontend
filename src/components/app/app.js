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
      <div className="app">

      <BrowserRouter>
      <div>
          <Header />
          <Route exact path='/dashboard' component={ Dashboard }/>
          {/* <Route exact path='/me' component={ Profile } /> */}
        </div>
      </BrowserRouter>       
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};
const mapStateToProps = state => ({
  loggedIn: !!state.token,

});
const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
