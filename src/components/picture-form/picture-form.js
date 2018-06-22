import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';



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
      pictureUploaded: false,
      error: false,
    };
    console.log('PICTURE FORM STATE', this.state);
    this.state = this.emptyState;
    autoBind.call(this, PictureForm);
  }
  handleChange(event) {
    const { type, files } = event.target; 
    if (type === 'file') {
      fileToBase64String(files[0])
        .then(result => this.setState({ 
          preview: result,
          pictureUploaded: true, 
        })); 
      this.setState({
        picture: files[0],
      }, () => {
      });
    } else {
      this.setState({
        error: true,
      });
    }
  }
  // handleSubmit takes our local ui state and passes it to the oncomplete function which will call our pictureCreate-action
  // this.state = preview, picture, url
  // picture should be files[0]
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    // this.setState(this.emptyState);
  }

  render() {
    const JSXupload = 
    <label className='image-input' htmlFor='image_upload'>Upload a Picture </label>;
    const JSXsubmit =
    <label className='image-submit' htmlFor='image_submit'> Create a Playlist</label>;
    return (
<div className ='picture-container'>
<form 
      className='picture-form'
      onSubmit={this.handleSubmit}
      >
     <img className='image-preview' src={this.state.preview}/>
  <input 
        type='file'
        name='picture'
        id='image_upload'
        onChange={this.handleChange}
      />
  { this.state.pictureUploaded ? JSXsubmit : JSXupload }
      <button type='submit' id='image_submit'> submit</button>
      </form>
      </div>
    );
  }
}
// onComplete is passed in by the Dashboard -- it calls the pictureCreateRequest ASYNC action and adds the picture to the store
PictureForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};

export default PictureForm;
