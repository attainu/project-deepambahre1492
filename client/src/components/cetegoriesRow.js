import React from 'react';
import {Table} from 'semantic-ui-react';

export default class Row extends React.Component{

    render(){
        return(
            <Table.Row>
                <Table.Cell>{this.props.item.type}</Table.Cell>
                <Table.Cell>{this.props.item.count}</Table.Cell>
                <Table.Cell>{this.props.item.price}</Table.Cell>
            </Table.Row>
        )
    }
}