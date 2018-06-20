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
        description: value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
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
        name='photo'
        onChange={this.handleChange}
      />
      <button type='submit'> Upload a Pic | Create a Playlist</button>
      </form>
    );
  }
}

PictureForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};
export default PictureForm;
