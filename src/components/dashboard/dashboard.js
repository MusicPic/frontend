/**
 * toggle between image upload form
 * and if uploaded showing the playlist edit and the profile
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PictureForm from './../picture-form/picture-form';
import * as pictureActions from '../../actions/picture-actions';


class Dashboard extends React.Component {
  // componentDidMount() {
  //   this.props.pictureFetch();
  // }
  render() {
    const {
      pictures, pictureCreate, pictureUpdate, pictureDelete,
    } = this.props;
    return (
      <div className='dashboard'>
      <h2>Picture loading </h2>
      <PictureForm 
      onComplete={pictureCreate}
      buttonText='Create picture'/>
      {/* {
        pictures.map((picture) => {
          return (
            <div key={picture._id}>
            <h3>{picture.firstName}</h3>
            
            <PictureForm 
              parcel={picture}
              onComplete={pictureUpdate}
              buttonText='Update parcel'/>
            <button onClick={() => pictureDelete(picture)}>delete</button>
            </div>
          );
        })
      } */}
      </div>
    );
  }
}
Dashboard.propTypes = {
  picturesFetch: PropTypes.func,
  pictureCreate: PropTypes.func,
  pictureUpdate: PropTypes.func,
  pictureDelete: PropTypes.func,
  pictures: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    parcels: state.pictures,
  };
};

const mapDispatchToProps = dispatch => ({
  picturesFetch: () => dispatch(pictureActions.picturesFetchRequest()),
  pictureCreate: picture => dispatch(pictureActions.pictureCreateRequest(picture)),
  pictureUpdate: picture => dispatch(pictureActions.pictureUpdateRequest(picture)),
  pictureDelete: picture => dispatch(pictureActions.pictureDeleteRequest(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
