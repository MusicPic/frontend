import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'contain',
  },
});

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
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const { classes } = this.props;

    const JSXupload = 
      <label className='image-input' htmlFor='image_upload'> 
        <p>Upload a Picture</p> 
      </label>;
    
    const JSXsubmit =
      <label className='image-submit' htmlFor='image_submit'>
        <p>Create a Playlist</p>
      </label>;

    return (
      <Card className={classes.card}>
        <form
          className='picture-form'
          onSubmit={this.handleSubmit}>
          <CardActionArea>
          <CardMedia 
          component="img" 
          className="image-preview" 
          height="500"
          image={this.state.preview}
          title="Uploaded Image"/>
          <CardActions>
          <input 
            type='file'
            name='picture'
            id='image_upload'
            onChange={this.handleChange}
          />
          { this.state.pictureUploaded ? JSXsubmit : JSXupload }
          <Button size="small" color="primary" type='submit' id='image_submit' className={classes.button}>Submit
          </Button>
          
          </CardActions>
        </CardActionArea>
        </form>
      </Card>
    );
  }
}

PictureForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
  classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(PictureForm);
