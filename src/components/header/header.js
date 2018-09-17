import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth-action';
import logo from '../../assets/logo2.png';
import * as routes from '../../routes';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
};
class Header extends React.Component {
  render() {
    const JSXNotLoggedIn = 
      <div className='not-loggedin'>
        <AppBar position="fixed" color="default">
        <Toolbar>
        <a href={routes.SPOTIFY_ROUTE}><label>Connect with Spotify</label></a>
        {/* <div className='logo-box'>
          <img className='logo' src={logo} alt='logo'/> 
        </div> */}
        </Toolbar>
        </AppBar>
      </div>;
    
    const JSXLoggedIn = 
      <div className='loggedin'>
        <AppBar position="static" color="default">
        <Toolbar>
          <Button className='home-button'><Link to={routes.ROOT_ROUTE}>Home</Link></Button>
            <Button className='profile-button'><Link to={routes.PROFILE_ROUTE}>Profile</Link></Button>
            <Button className='picture-button'><Link to={routes.DASHBOARD_ROUTE}>Picture Upload</Link></Button>
            {/* <label htmlFor ='logout_button'>Logout</label> */}
            <Button className='logout' id='logout_button' onClick={this.props.doLogout}>
              <a className='logout' href='/'>Logout</a> 
            </Button>
            {/* <div className='logo-box'>
          <img className='logo' src={logo} alt='logo'/> 
        </div> */}
        </Toolbar>
        </AppBar>  
      </div>;

    return (
      <header className='header'>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
