import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth-action';
import logo from '../../assets/logo2.png';
import * as routes from '../../routes';

class Header extends React.Component {
  render() {
    const JSXNotLoggedIn = 
      <div className='not-loggedin'>
        <a href={routes.SPOTIFY_ROUTE}><label>Connect with Spotify</label></a>
      </div>;
    
    const JSXLoggedIn = 
      <div className='loggedin'>
        <nav className='nav-bar'>
          <ul>
            <li><Link to={routes.ROOT_ROUTE}>Home</Link></li>
            <li><Link to={routes.DASHBOARD_ROUTE}>Profile</Link></li>
            <li><Link to={routes.DASHBOARD_ROUTE}>Picture Upload</Link></li>
            <label htmlFor ='logout_button'>Logout</label>
            <button className='logout' id='logout_button' onClick={this.props.doLogout}>
              <a className='logout' href='/'>Logout</a> 
            </button>
          </ul>
        </nav>
      </div>;

    return (
      <header className='header'>
        <div className='logo-box'>
          <img className='logo' src={logo} alt='logo'/> 
        </div>
        {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
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
