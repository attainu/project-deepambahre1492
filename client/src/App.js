import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Views/Home';
import About from './components/Views/About';
import ProductForm from './components/Categories/AddCategories';
import ProductList from './components/Categories/Crud/CategoriesList';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import {Route,Switch,Redirect} from 'react-router-dom';
import LoginForm from './components/Layout/LoginForm';
import Categories from './components/Categories/Categories';
import SignupForm from './components/Layout/SignUpForm';
import {connect} from 'react-redux';
import {getList} from './actions/productActions';
import Profile from './components/Views/Profile';
import './assets/css/style.css';
import './assets/js/script.js';

class App extends React.Component {

  /*
  constructor(props){
    super(props);
    this.state = {
      productlist: []
    }
  }
  */
  componentDidMount() {
    if(this.props.isLogged){
      this.props.dispatch(getList(this.props.token));
    }
  }


  
  render (){
    return (
      <div className="App">
        <Navbar />
        <hr/>
        <Switch>
        <Route exact path="/" component={Home } />
        <Route exact path="/about" component={About } />
          <Route exact path="/login" render={
            () => this.props.isLogged ?
              (<Redirect to="/categories" />):(<LoginForm  />)
          }/>
          <Route exact path="/register" component={SignupForm } />
          <Route exact path="/categories" render= { () =>
            this.props.isLogged ?
             (<Categories /> ) :
             (<Redirect to="/login" />)
             } 
          />
          <Route exact path="/list" render= { () =>
            this.props.isLogged ?
             (<ProductList /> ) :
             (<Redirect to="/login" />)
             } 
          />
         <Route path="/form" render = { () => 
          this.props.isLogged ?
            (<ProductForm /> ):(<Redirect to="/login" />)
            }
          />
          <Route exact path="/profile" render= { () =>
            this.props.isLogged ?
             (<Profile /> ) :
             (<Redirect to="/login" />)
             } 
          />
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    token: state.login.token
  }
}

export default connect(mapStateToProps)(App);