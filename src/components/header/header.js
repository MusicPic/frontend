import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth-action';
import Profile from './../profile/profile';
import logo from '../../assets/logo2.png';
import * as routes from '../../routes';


class Header extends React.Component { 
  render() {
    const JSXNotLoggedIn = 
      <ul>

        <li className='spotify'><a href={routes.SPOTIFY_ROUTE}>Connect with Spotify</a></li>
      </ul>;
      const JSXLoggedIn = 
      <ul>
        <li><Link to={routes.ROOT_ROUTE}>Home</Link></li>
        <li><Link to={routes.DASHBOARD_ROUTE}>Profile</Link></li>
        <li><Link to={routes.DASHBOARD_ROUTE}>Upload Picture</Link></li>
        <button className='logout' onClick={this.props.doLogout}><a className='logout' href='/'>Logout</a> </button></li>
      </ul>;

    return (
      <header className='header'>
        <h1><img className='logo' src={logo} alt='logo'/></h1>
        <nav>
          {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
        </nav>
      </header>
    );
  }
}
Header.propTypes = {
  loggedIn: PropTypes.bool,
  doLogout: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token, 
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
