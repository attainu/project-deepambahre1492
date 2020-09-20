import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addToList} from '../actions/shoppingActions';

class ShoppingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: '',
            count: 0,
            price: 0
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
            type: this.state.type,
            count: this.state.count,
            price: this.state.price
        }
        this.props.dispatch(addToList(this.props.token,item));
        this.setState({
            type: '',
            count: 0,
            price: 0
        })
    }

    

    render(){
        return(
            <div className="page backgroundAddImage">
      <div className="container">
        <div className="row justify">
          <div className="col-md-10 col-md-offset-1">
            <div className="cetegories">
            <Form onSubmit={this.onSubmit}>
                <Form.Field className="form-group">
                    <input type='text'
                        name='type'
                        className="form-control"
                        placeholder="Type"
                        onChange={this.onChange}
                        value={this.state.type} 
                    />
                    <Form.Field className="form-group">
                    <input type='number'
                        name='count'
                        placeholder="Count"
                        className="form-control"
                        minimum = '0'
                        onChange={this.onChange}
                        value={this.state.count} 
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

export default connect(mapStateToProps)(ShoppingForm);