import React from 'react';
import {Button} from 'semantic-ui-react';
import Row from './CategoriesRow';
import {connect} from 'react-redux';
import {getList} from '../../actions/productActions';
import { Card, Pagination } from 'semantic-ui-react';
class productList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search:""
        }
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    searchByType = (event) => {
        this.props.dispatch(getList(this.props.token,this.state.search));
        this.setState({
            search:""
        })
    }


    // key is mandatory and must be unique!!!!
    render(){

        let items = this.props.productlist.map((item) =>{

            return <Row key= {item._id} item={item} />
            }
        )
        return(
            <div className="page backgroundAddImage">
      <div className="container">
        <div className="row justify">
          <div className="col-md-12">
            <div className="AddProduct form-inline">
                <div className="searchProduct">
                <input type="text" className="form-control searchbar-width" placeholder="Search by Product Name" name = "search" onChange = {this.onChange}
                    value = {this.state.search} />
                <Button className="btn-ecommarce" style={{marginLeft:10}} onClick={this.searchByType}>Search</Button>
                </div>
                <div className="row">
                    <div className="product-view">
                       <Card.Group>{items}</Card.Group>
                       
                       <Pagination defaultActivePage={1} totalPages={10} />
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.login.token,
        productlist: state.product.list
    }
}

export default connect(mapStateToProps)(productList);