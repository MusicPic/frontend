import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import * as routes from '../../routes';

class Header extends React.Component {
  render() {
    const JSXNotLoggedIn = 
    <ul>
      <li><Link to={routes.ROOT_ROUTE}>Home</Link></li>
      <li><a href={routes.SPOTIFY_ROUTE}>Connect with Spotify</a></li>
    </ul>;
    const JSXLoggedIn = 
    <ul>
      <li><Link to={routes.ROOT_ROUTE}>Music Pic</Link></li>
      <li><Link to={routes.LOGOUT_ROUTE}>Logout</Link></li>
    </ul>;

    return (
  <header className='header'>
  <h1> MUSIC PIC</h1>
  <nav>
    {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn
    }
  </nav>
    {this.props.loggedIn ? 
    <button className='logout' onClick={this.props.doLogout}>Logout</button> : undefined}
  </header>
    );
  }
}
Header.propTypes = {
  loggedIn: PropTypes.bool,
  doLogout: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedIn: !!state.spotify_id, 
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
