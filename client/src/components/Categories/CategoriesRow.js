import React from 'react';
//import {Table} from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react'
export default class Row extends React.Component{

    render(){
        return(

             <Grid>
             <Grid.Row>
               <Grid.Column width={4}>
                 <Image src={this.props.item.productImage} className="img-fluid" alt="" />
                 <p>{this.props.item.productName}</p>
                 <p>{this.props.item.quantity}</p>
                 <p>{this.props.item.price}</p>
                 <p>{this.props.item.productColor}</p>
               </Grid.Column>
               <Grid.Column width={4}>
               <Image src={this.props.item.productImage} className="img-fluid" alt="" />
                 <p>{this.props.item.productName}</p>
                 <p>{this.props.item.quantity}</p>
                 <p>{this.props.item.price}</p>
                 <p>{this.props.item.productColor}</p>
               </Grid.Column>
               <Grid.Column width={4}>
               <Image src={this.props.item.productImage} className="img-fluid" alt="" />
                 <p>{this.props.item.productName}</p>
                 <p>{this.props.item.quantity}</p>
                 <p>{this.props.item.price}</p>
                 <p>{this.props.item.productColor}</p>
               </Grid.Column>
             </Grid.Row>
             </Grid>
        )
    }
}