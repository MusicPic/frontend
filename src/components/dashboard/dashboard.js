
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
    const JSXloggedIn = <div className='dashboard'>
      <h2> Dashboard </h2>
      <Profile profile={this.props.profile}/>
      <PictureForm 
      onComplete={this.props.pictureCreate}
      buttonText='Create picture'/>
      </div>;
   
    
    return (
        <div>
          { this.props.loggedIn ? JSXloggedIn : null }
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
  loggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures,
    profile: state.profile,
    loggedIn: !!state.token,
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
