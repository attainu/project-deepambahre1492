import React from 'react';
//import {Table} from 'semantic-ui-react';
import { Image, Card } from 'semantic-ui-react';
export default class Row extends React.Component{

    render(){
        return(

<Card>
<Card.Content>
  <Card.Header className="card-header">
  <Image src={this.props.item.productImage} className="img-fluid" alt="" />
  </Card.Header>
  <Card.Description>
  <h6 className="ProductName">{this.props.item.productName}</h6>
  <p className="price">Price: &nbsp;{this.props.item.price}</p>
  </Card.Description>
</Card.Content>
</Card>







        )
    }
}