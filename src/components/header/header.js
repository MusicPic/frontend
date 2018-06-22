import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth-action';
import Profile from './../profile/profile';
import logo from '../../assets/logo2.png';
import * as routes from '../../routes';
// import AppBar from ‘material-ui/AppBar’;

class Header extends React.Component {
  
  render() {
    const JSXNotLoggedIn = 
    <div className='not-loggedin'>
      <ul>
      <li className='spotify'><a href={routes.SPOTIFY_ROUTE}>Connect with Spotify</a></li>
    </ul>
    </div>;
    const JSXLoggedIn = 
    <ul>
      <li><Link to={routes.ROOT_ROUTE}>H</Link></li>
      <li><Link to={routes.ROOT_ROUTE}>P</Link></li>
      <li><Link to={routes.PICTURE_ROUTE}>Pic</Link></li>
      <li>  
    <button className='logout' onClick={this.props.doLogout}><a className='logout' href='/'>Logout</a> </button></li>
    </ul>;

    return (
  <header className='header'>
  <h1><img className='logo' src={logo} alt='logo'/></h1>
  <nav>
    {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn
    }
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
