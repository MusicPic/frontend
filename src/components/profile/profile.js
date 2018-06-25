import React from 'react';
import PropTypes from 'prop-types';

import autoBind from '../../utils/utils';

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
      <div className='profile'>
        { this.props.profile ? 
          <p className='profile-welcome'>{ `Welcome ${this.props.profile.username}` }</p>
          : null 
        }
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
