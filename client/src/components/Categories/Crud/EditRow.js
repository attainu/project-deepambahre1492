import React from 'react';
import {Table, Button} from 'semantic-ui-react';

export default class EditRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productName: props.item.productName,
            quantity: props.item.quantity,
            price: props.item.price,
            productColor: props.item.productColor,
            productImage: props.item.productImage
        }
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    editItem = (event) => {
        let item ={
            _id: this.props.item._id,
            productName: this.state.productName,
            quantity: this.state.quantity,
            price: this.state.price,
            productColor: this.state.productColor,
            productImage: this.state.productImage
        }
        this.props.editItem(item);
    }

    cancel = () => {
        this.props.cancel();
    }

    render() {
        return(
            <Table.Row>
                <Table.Cell>
                    <input type='text' name='productName' required={true} value={this.state.productName} onChange={this.onChange} />
                </Table.Cell>
                <Table.Cell>
                    <input type='number' name='quantity' required={true} minimum='0' value={this.state.quantity} onChange={this.onChange} />
                </Table.Cell>
                <Table.Cell>
                    <input type='number' name='price' required={true} minimum='0' step='0.01' value={this.state.price} onChange={this.onChange} />
                </Table.Cell>
                <Table.Cell>
                    <input type='text' name='productColor' required={true} value={this.state.productColor} onChange={this.onChange} />
                </Table.Cell>
                <Table.Cell>
                    <input type='file' name='productColor' required={true} value={this.state.productImage} onChange={this.onChange} />
                </Table.Cell>
                <Table.Cell>
                    <Button color='green' onClick={this.editItem}>Save</Button>
                </Table.Cell>
                <Table.Cell>
                    <Button color='red' onClick={this.cancel}>Cancel</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}