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
      <div>
        { this.props.profile ? this.props.profile.username : null }
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
