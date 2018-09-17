import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PictureForm from './../picture-form/picture-form';
import Profile from './../profile/profile';
import * as pictureActions from '../../actions/picture-actions';
import * as profileActions from '../../actions/profile-action';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { withStyles } from '../../../node_modules/@material-ui/core';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    display: 'block',
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});
class Dashboard extends React.Component {
  componentDidMount() {
    console.log('component did mount?', this.props);
    if (this.props.loggedIn) {
      this.props.pFetchProfile()
        .catch(console.error);
    }
  }
  

  render() {
    const { classes, theme } = this.props;
    const { picture } = this.props;
    console.log('Picture', picture);
    const JSXloggedIn = 
      <div className='dashboard'>
        <Profile profile={this.props.profile}/>
        <PictureForm 
          onComplete={this.props.pictureCreate}
        />
      </div>;
   
    return (
      
      <Paper className ={classes.paper}>
        { this.props.loggedIn ? JSXloggedIn : null }
        <div className={classes.details}>
        <Typography>
            {
              picture[0] ? 
                <div className='emotion'>
                  <h1>Your emotion is: <em>{ picture[0].emotion }</em> </h1>
                  <h3> Some songs in your playlist - { picture[0].playlist.name }</h3>
                </div>
              : null
            }
        </Typography>
        
        {
          
          picture[0] ? picture[0].tracks.name.slice(0, 10).map((song) => {
            return (
              <Card className={classes.card} key={ song }>
                <CardContent className={classes.content}>
                { song }
                {/* <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
              </CardContent>
              </Card>
            
            );
          }) : null
        }
      
        </div>
      </Paper>      
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
  classes: PropTypes.object.isRequired,

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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));

