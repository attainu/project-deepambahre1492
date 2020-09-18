import React, {Component} from "react";
import AuthOptions from "../auth/AuthOptions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-space-top" data-toggle="affix">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#">E-Commarce Store</a>
      <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <AuthOptions />
        </div>
    </div>
  </nav>
    );
  }
}
  export default Navbar;









  
