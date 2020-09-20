import React from 'react';
import {Table, Button} from 'semantic-ui-react';
import Row from './cetegoriesRow';
import {connect} from 'react-redux';
import {getList} from '../actions/shoppingActions';

class ShoppingList extends React.Component{

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

        let items = this.props.shoppinglist.map((item) =>{

            return <Row key= {item._id} item={item} />
            }
        )
        return(
            <div className="page backgroundAddImage">
      <div className="container">
        <div className="row justify">
          <div className="col-md-10 col-md-offset-1">
            <div className="AddProduct form-inline">
                <label htmlFor="search">Search by type:</label>
                <input type="text" className="form-control" name = "search" onChange = {this.onChange}
                    value = {this.state.search} />
                <Button style={{marginLeft:10}} onClick={this.searchByType}>Search</Button>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {items}
                    </Table.Body>
                </Table>
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
        shoppinglist: state.shopping.list
    }
}

export default connect(mapStateToProps)(ShoppingList);