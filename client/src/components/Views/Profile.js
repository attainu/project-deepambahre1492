import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <Fragment>
          <span className="profile">
            <strong>Welcome {}</strong>
          </span>
      </Fragment>
    );

  }
}

const mapStateToProps = (state) => {
  return {
      user: state.login.user,
      data: state.login.data
  }
}

export default connect(mapStateToProps)(Profile);
