import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';

import * as profileActions from '../../actions/profile-action';
import * as routes from '../../routes';


import autoBind from '../../utils/utils';
import ProfileForm from '../profile-form/profile-form';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    autoBind.call(this, Profile);
  }

  // handleCreate(profile) {
  //   this.props.profileCreate(profile)
  //     .then(() => {
  //       this.props.history.push(routes.DASHBOARD_ROUTE);
  //     });
  // }

  // handleUpdate(profile) {
  //   this.props.profileUpdate(profile);
  //   this.setState({ editing: false });
  // }
  
  render() {
    console.log('profile props', this.props.profile);
    // const {
    //   profile,
    // } = this.props;

    // let JSXEditing = null;
    // let JSXDisplay = null;
    // let JSXProfile = null;

    // if (profile) {
    //   JSXEditing =
    //   <div>
    //     {/* <ProfileForm profile={profile} onComplete={this.handleUpdate}/>
    //     */}
    //     {/* <button onClick={() => this.setState({ editing: false })}> Cancel</button> */}
    //   </div>;

    //   JSXDisplay = 
    //   <div>
        
    //     <button onClick={() => this.setState({ editing: true })}>Edit</button>
    //   </div>;
    //   JSXProfile = 
    //   <div>
    //     <h2>{profile.username}</h2>
    //     <h3>{profile.avatar}</h3>
    //     {this.state.editing ? JSXEditing : JSXDisplay }
    //   </div>;
    // }
    return (
      <div className='profile'>
        <p className='profile-welcome'>Welcome, {this.props.username ? this.props.profile.username : 'username'}</p>
      </div>
    );
  }
}

Profile.propTypes = {
  profileFetch: PropTypes.object,
  profile: PropTypes.object,
  history: PropTypes.object, 
};


export default Profile;
