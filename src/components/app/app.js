import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/main.scss';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';
import * as profileActions from '../../actions/profile-action';

class App extends React.Component {
  // componentDidMount() {
  //   if (this.props.loggedIn) {
  //     this.props.pFetchProfile()
  //       .catch(console.error);
  //   }
  // }
  render() {
    return (
<div className="app">

<BrowserRouter>
<div>
    <Header />
    <Route exact path='/dashboard' component={ Dashboard }/>
    <Route exact path='/me' component={ Profile } />
  </div>
</BrowserRouter>

  
</div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  pFetchProfile: PropTypes.func,
};
const mapStateToProps = state => ({
  loggedIn: !!state.spotify_id,

});
const mapDispatchToProps = dispatch => ({
  pFetchProfile: () => dispatch(profileActions.fetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
