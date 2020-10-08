import React, { Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    console.log(this.props.profile);
    return (
      <div className="row justify">
        <div className="col-md-4 col-md-offset-4">
          <div className="profile">
            <div className="row justify">
              <div className="col-md-6">
              <img src= {this.props.profile.profile} alt={this.props.profile.profile} className="img-fluid" style={{height:'15rem', width:'auto' }} / >
               </div>
               <div className="col-md-6" style={{position:'relative', top:'5rem' }}>
               <p>Welcome <strong>{this.props.profile.username}</strong></p>
               <p> {this.props.profile.email}</p>
               </div>
            </div>
            </div>
            </div>
            </div>
        
      
    );

  }
}

const mapStateToProps = (state) => {
  return {
    
      profile:state.login.profile
  }
}

export default connect(mapStateToProps)(Profile);
