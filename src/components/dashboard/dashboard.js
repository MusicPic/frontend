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
    const { picture } = this.props;
    const JSXloggedIn = 
      <div className='dashboard'>
        <Profile profile={this.props.profile}/>
        <PictureForm 
          onComplete={this.props.pictureCreate}
        />
      </div>;
   
    return (
      <div className ='spotify'>
        { this.props.loggedIn ? JSXloggedIn : null }
        <div>
        {
          picture[0] ? 
            <div className='emotion'>
              <h1>Your emotion is: <em>{ picture[0].emotion }</em> </h1>
              <h3> Some songs in your playlist - { picture[0].playlist.name }</h3>
            </div>
          : null
        }
        {
          picture[0] ? picture[0].tracks.slice(0, 10).map((song) => {
            return (
              <div className='song-item' key={song}> 
                { song }
              </div>
            );
          }) : null
        }
        </div>
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
  picture: PropTypes.array,
  profile: PropTypes.object,
  loggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    picture: state.picture,
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

