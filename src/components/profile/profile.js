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
  
  render() {
    return (
      <div>
        <p>{this.props.profile ? this.props.profile.username : 'Spotify user'}</p>
        
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
