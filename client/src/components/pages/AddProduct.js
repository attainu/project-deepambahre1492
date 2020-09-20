import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {addToList} from '../../actions/shoppingActions';

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
        this.props.dispatch(addToList(item));
        this.setState({
            type: '',
            count: 0,
            price: 0
        })
    }

    

    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor='type'>Type:</label>
                    <input type='text'
                        name='type'
                        onChange={this.onChange}
                        value={this.state.type} 
                    />
                    <Form.Field>
                    <label htmlFor='count'>Count:</label>
                    <input type='number'
                        name='count'
                        minimum = '0'
                        onChange={this.onChange}
                        value={this.state.count} 
                    />
                    </Form.Field>
                    <Form.Field>
                    <label htmlFor='price'>Price:</label>
                    <input type='number'
                        name='price'
                        minimum = '0'
                        step = '0.01'
                        onChange={this.onChange}
                        value={this.state.price} 
                    />
                    </Form.Field>
                </Form.Field>
                <Button type='submit'>Add</Button>
            </Form>
        )
    }
}


export default ShoppingForm;