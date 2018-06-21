import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autoBind from '../../utils/utils';
import * as pictureActions from '../../actions/picture-actions';

const fileToBase64String = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error('you must send a file'));
    }
    const fileReader = new FileReader();
    
    fileReader.addEventListener('load', () => resolve(fileReader.result));
    fileReader.addEventListener('error', reject);
    return fileReader.readAsDataURL(file);
  });
};

class PictureForm extends React.Component {
  constructor(props) {
    super(props);
    this.emptyState = {
      preview: undefined, 
      picture: '', 
      url: '',
    };
    this.state = this.emptyState;
    autoBind.call(this, PictureForm);
  }
  
  handleChange(event) {
    const { type, value, files } = event.target; 
    if (type === 'file') {
      fileToBase64String(files[0])
        .then(result => this.setState({ preview: result })); 
      this.setState({
        picture: files[0],
      }, () => {
      });
    } else {
      this.setState({
        url: value,
      });
    }
  }
  // here we are passing our local ui state to the oncomplete function which will call our picture-action
  // this.state = preview and picture
  // picture should be files[0]
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    console.log('STATE IN PICTURE FORM', this.state);
    this.setState(this.emptyState);
  }

  render() {
    return (
      <form 
      className='picture-form'
      onSubmit={this.handleSubmit}
      >
      <img src={this.state.preview}/>
      <label>Picture</label>
      <input 
        type='file'
        name='picture'
        onChange={this.handleChange}
      />
          <input 
        type='text'
        name='url'
        onChange={this.handleChange}
      />
      <button type='submit'> Upload a Pic | Create a Playlist</button>
      </form>
    );
  }
}
// Picture form onComplete passed in in Dashboard
PictureForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};
const mapDispatchToProps = dispatch => ({
  pictureCreate: picture => dispatch(pictureActions.pictureCreateRequest(picture)),
});

export default connect(null, mapDispatchToProps)(PictureForm);
