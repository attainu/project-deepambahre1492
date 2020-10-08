import React from 'react';
import {Table, Button} from 'semantic-ui-react';

export default class RemoveRow extends React.Component{

    cancel = () => {
        this.props.cancel();
    }

    removeFromList = (event) => {
        this.props.removeFromList(event.target.name);
    }

    render(){
        return(
            <Table.Row>
                <Table.Cell>{this.props.item.productName}</Table.Cell>
                <Table.Cell>{this.props.item.quantity}</Table.Cell>
                <Table.Cell>{this.props.item.price}</Table.Cell>
                <Table.Cell>{this.props.item.productColor}</Table.Cell>
                <Table.Cell>{this.props.item.productBrand}</Table.Cell>
                <Table.Cell>{this.props.item.productSize}</Table.Cell>
                <Table.Cell>{<img src={this.props.item.productImage} style={{height:'50px',width:'auto'}} className="img-fluid" alt="" />}</Table.Cell>
                <Table.Cell><span className="inline-remove-btn"><Button color='red' onClick={this.cancel}>Cancel</Button>
                <Button color='green' onClick={this.removeFromList} name={this.props.item._id}>Confirm</Button></span></Table.Cell>
            </Table.Row>
        )
    }

}