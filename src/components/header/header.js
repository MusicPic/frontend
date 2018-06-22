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
     <a href={routes.SPOTIFY_ROUTE}>Connect with Spotify</a>
    </div>;
    
    const JSXLoggedIn = 
    <div className='loggedin'>
    <nav className='nav-bar'>
    <ul>
      <li><Link to={routes.ROOT_ROUTE}>Home</Link></li>
      <li><Link to={routes.ROOT_ROUTE}>Profile</Link></li>
      <li><Link to={routes.PICTURE_ROUTE}>Picture Upload</Link></li>
      <li>  
        <label htmlFor ='logout_button'>Logout</label>
    <button className='logout' id='logout_button' onClick={this.props.doLogout}><a className='logout' href='/'>Logout</a> </button></li>
    </ul>
    </nav>
    </div>;

    return (
  <header className='header'>
  <img className='logo' src={logo} alt='logo'/>
    {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn
    }
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
