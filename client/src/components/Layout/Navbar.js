import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/loginActions';
import logo from '../../assets/images/logo.png';

class Navbar extends React.Component {
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
    logout = () => {
        this.props.dispatch(logout(this.props.token));
    }
	
	render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        if(this.props.isLogged){
            return (
                <nav className="navbar navbar-expand-lg fixed-top navbar-space-top" data-toggle="affix">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/#"><img className="navLogo" src={logo} alt={logo}/></a>
                  <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                    <ul className="auth-options navbar-nav ml-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/categories">Categories</Link></li>
<li className="nav-item"><Link className="nav-link" to="/list">list</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/form">AddProduct</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login" onClick={this.logout}>Log out</Link></li>

    </ul>
                    </div>
                </div>
              </nav>
            )
        }
        else{
            const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
            return (
                <nav className="navbar navbar-expand-lg fixed-top navbar-space-top" data-toggle="affix">
                <div className="container-fluid">
                  <a className="navbar-brand" href="/#"><img className="navLogo" src={logo} alt={logo}/></a>
                  <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                    <ul className="auth-options navbar-nav ml-auto">

<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
<li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
<li className="nav-item"><Link className="nav-link" to="/register">SignUp</Link></li>

</ul>
                    </div>
                </div>
              </nav>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged:state.login.isLogged,
        loading:state.login.loading,
        error:state.login.error,
        token: state.login.token
    }
}

export default connect(mapStateToProps)(Navbar);