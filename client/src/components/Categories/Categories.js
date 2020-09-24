import React from 'react';
import {Button} from 'semantic-ui-react';
import Row from './CategoriesRow';
import {connect} from 'react-redux';
import {getList} from '../../actions/productActions';

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
                <label htmlFor="search">Search by type:</label>
                <input type="text" className="form-control" name = "search" onChange = {this.onChange}
                    value = {this.state.search} />
                <Button style={{marginLeft:10}} onClick={this.searchByType}>Search</Button>
                </div>
                <div className="row">
                <div>
                    <div className="product-view">
                       {items}
                    </div>
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