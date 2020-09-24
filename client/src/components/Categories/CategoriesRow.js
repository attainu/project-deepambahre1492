import React from 'react';
import {Table} from 'semantic-ui-react';

export default class Row extends React.Component{

    render(){
        return(
            <Table.Row>
                <Table.Cell>{this.props.item.productName}</Table.Cell>
                <Table.Cell>{this.props.item.quantity}</Table.Cell>
                <Table.Cell>{this.props.item.price}</Table.Cell>
                <Table.Cell>{this.props.item.productColor}</Table.Cell>
                <Table.Cell><img src={this.props.item.productImage} className="img-fluid" alt="" /></Table.Cell>
            </Table.Row>
        )
    }
}