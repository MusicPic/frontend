
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PictureForm from './../picture-form/picture-form';
import Profile from './../profile/profile';
import * as pictureActions from '../../actions/picture-actions';
import * as profileActions from '../../actions/profile-action';

class Dashboard extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.pFetchProfile()
        .catch(console.error);
    }
  }
  render() {
    const {
      profile, profileCreate, pictures, pictureCreate, pictureUpdate, pictureDelete,
    } = this.props;
    return (
      <div className='dashboard'>
      <h2> Dashboard </h2>
      <Profile profile={profile}/>
      <PictureForm 
      onComplete={pictureCreate}
      buttonText='Create picture'/>
      </div>
    );
  }
}
Dashboard.propTypes = {
  pFetchProfile: PropTypes.func,
  profileCreate: PropTypes.func,
  picturesFetch: PropTypes.func,
  pictureCreate: PropTypes.func,
  pictureUpdate: PropTypes.func,
  pictureDelete: PropTypes.func,
  pictures: PropTypes.array,
  profile: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures,
    // profile: state.profile,
  };
};

const mapDispatchToProps = dispatch => ({
  pFetchProfile: () => dispatch(profileActions.fetchRequest()),
  picturesFetch: () => dispatch(pictureActions.picturesFetchRequest()),
  pictureCreate: picture => dispatch(pictureActions.pictureCreateRequest(picture)),
  pictureUpdate: picture => dispatch(pictureActions.pictureUpdateRequest(picture)),
  pictureDelete: picture => dispatch(pictureActions.pictureDeleteRequest(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// const {
//   profileCreate, pictures, pictureCreate, pictureUpdate, pictureDelete,
// } = this.props;

// const onProfile = 
//   <div>
//     <ProfileForm 
//         onComplete={profileCreate}
//         buttonText='Create picture'/>
//   </div>;

// const onPicture =
//   <div className='picture-loading'>
//     <h2>Picture loading </h2>
//     {/* <Profile/> */}
//     <PictureForm 
//       onComplete={pictureCreate}
//       buttonText='Create picture'/>
//   </div>;
