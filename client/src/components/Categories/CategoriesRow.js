import React from 'react';
//import {Table} from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react'
export default class Row extends React.Component{

    render(){
        return(

             <Grid>
             <Grid.Row className="margin-zero">
               <Grid.Column width={4}>
                 <Image src={this.props.item.productImage} className="img-fluid" alt="" />
                 <h6 className="ProductName">{this.props.item.productName}</h6>
                 <p className="price">Price: &nbsp;{this.props.item.price}</p>
               </Grid.Column>
               <Grid.Column width={4}>
               <Image src={this.props.item.productImage} className="img-fluid" alt="" />
                 <h6 className="ProductName">{this.props.item.productName}</h6>
                 <p className="price">Price: &nbsp; {this.props.item.price}</p>
               </Grid.Column>
               <Grid.Column width={4}>
               <Image src={this.props.item.productImage} className="img-fluid" alt="" />
                 <h6 className="ProductName">{this.props.item.productName}</h6>
                 <p className="price">Price: &nbsp; {this.props.item.price}</p>
               </Grid.Column>
             </Grid.Row>
             </Grid>
        )
    }
}