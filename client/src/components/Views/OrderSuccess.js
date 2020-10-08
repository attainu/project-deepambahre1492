import React, { Component} from 'react';
import { Redirect,Link } from "react-router-dom";
class OrderSuccess extends Component {
    state = {
        redirect: false
      }
    
      componentDidMount() {
        this.id = setTimeout(() => this.setState({ redirect: true }), 8000)
      }
      componentWillUnmount() {
        clearTimeout(this.id)
      }    
  render() {
    return this.state.redirect
    ? <Redirect to="/categories" />
      : <div className="row justify">
      <div className="col-md-8 col-md-offset-2">
        <div className="OrderSuccess">
            <h3>Your Order is Successfully Placed</h3>
            <p>Thank You Using Our Web App!</p>
            <Link to="/categories">It will automatically redirect to categories after 8 seconds</Link>
          </div>
          </div>
          </div>

  }
}

export default OrderSuccess;
