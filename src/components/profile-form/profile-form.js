import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';

const emptyState = {
  username: '',
  avatar: '',
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : emptyState;
    autoBind.call(this, ProfileForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <div className='profile-form'>
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <textarea
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <textarea
          name='avatar'
          value={this.state.avatar}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>
      </form>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  onComplete: PropTypes.func,
  profile: PropTypes.object,
};

export default ProfileForm;
