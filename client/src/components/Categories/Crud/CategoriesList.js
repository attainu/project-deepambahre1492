import React from 'react';
import {Table, Button} from 'semantic-ui-react';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import {connect} from 'react-redux';
import {getList,removeFromList,editItem} from '../../../actions/productActions';

class productList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            removeIndex: -1,
            editIndex: -1,
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

    changeToRemoveMode = (id) => {
        for(let ii=0; ii < this.props.productlist.length;ii++){
            if(id === this.props.productlist[ii]._id){
                this.setState({
                    removeIndex: ii,
                    editIndex: -1
                })
            }
        }
    }

    changeToEditMode = (id) => {
        for(let ii=0; ii < this.props.productlist.length;ii++){
            if(id === this.props.productlist[ii]._id){
                this.setState({
                    removeIndex: -1,
                    editIndex: ii
                })
            }
        }
    }

    removeFromList = (id) => {
        this.props.dispatch(removeFromList(this.props.token,id));
        this.cancel();
    }

    editItem = (item) => {
        this.props.dispatch(editItem(this.props.token,item));
        this.cancel();
    }

    cancel = () => {
        this.setState({
            removeIndex:-1,
            editIndex:-1
        })
    }

    // key is mandatory and must be unique!!!!
    render(){
        let items = this.props.productlist.map((item,index) =>{
            if(this.state.removeIndex===index) {
                return <RemoveRow key= {item._id} item={item} 
                removeFromList={this.removeFromList} 
                cancel={this.cancel} />
            }
            if(this.state.editIndex===index){
                return <EditRow key= {item._id} item={item} 
                editItem={this.editItem} 
                cancel={this.cancel} />
            }

            return <Row key= {item._id} item={item} 
            changeToEditMode={this.changeToEditMode} 
            changeToRemoveMode={this.changeToRemoveMode} />
            }
        )
        return(

                <div className="page backgroundAddImage">
      <div className="container">
        <div className="row justify">
          <div className="col-md-10 col-md-offset-1">
            <div className="AddProduct form-inline">
                <div className="form-inline">
                <input type="text" name = "search" placeholder="Search by Product Name" onChange = {this.onChange}
                    value = {this.state.search} />
                <Button style={{marginLeft:10}} className="btn-ecommarce" onClick={this.searchByType}>Search</Button>
                </div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>product Name</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Product Color</Table.HeaderCell>
                            <Table.HeaderCell>product Image</Table.HeaderCell>
                            <Table.HeaderCell>Remove</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
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
        productlist: state.product.list
    }
}

export default connect(mapStateToProps)(productList);