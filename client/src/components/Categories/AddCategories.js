import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addToList} from '../../actions/productActions';

class productForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productName: '',
            quantity: undefined,
            price: undefined,
            productColor: '',
            productImage: ''
        }
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    onSubmit = (event) => {
        event.preventDefault();
        let item = {
            productName: this.state.productName,
            quantity: this.state.quantity,
            price: this.state.price,
            productColor: this.state.productColor,
            productImage: this.state.productImage
        }
        this.props.dispatch(addToList(this.props.token,item));
        this.setState({
            productName: '',
            quantity: 0,
            price: 0,
            productColor: '',
            productImage: ''
        })
    }

    

    render(){
        return(
            <div className="page backgroundAddImage">
      <div className="container">
        <div className="row justify">
          <div className="col-md-10 col-md-offset-1">
            <div className="cetegories">
            <Form onSubmit={this.onSubmit} encType="multipart/form-data">
                <Form.Field className="form-group">
                    <input type='text'
                        name='productName'
                        className="form-control"
                        placeholder="product Name"
                        onChange={this.onChange}
                        value={this.state.productName} 
                    />
                </Form.Field>
                <Form.Field className="form-group">
                    <input type='number'
                        name='quantity'
                        placeholder="Quantity"
                        className="form-control"
                        minimum = '0'
                        onChange={this.onChange}
                        value={this.state.quantity} 
                    />
                </Form.Field>
                <Form.Field className="form-group">
                    <input type='number'
                        name='price'
                        placeholder="Price"
                        className="form-control"
                        minimum = '0'
                        step = '0.01'
                        onChange={this.onChange}
                        value={this.state.price} 
                    />
                </Form.Field>
                <Form.Field className="form-group">
                    <input type='text'
                        name='productColor'
                        className="form-control"
                        placeholder="Product Color"
                        onChange={this.onChange}
                        value={this.state.productColor} 
                    />
                </Form.Field>
                <Form.Field className="form-group file-width">
                    <input type='file'
                        name='productImage'
                        className="productImage"
                        onChange={this.onChange}
                        value={this.state.productImage} 
                    />
                </Form.Field>
                
                <Button type='submit'>Add</Button>
            </Form>
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
        token:state.login.token
    }
}

export default connect(mapStateToProps)(productForm);