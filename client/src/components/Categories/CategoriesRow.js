import React from 'react';
//import {Table} from 'semantic-ui-react';
import { Image, Card } from 'semantic-ui-react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {addCart} from '../../actions/productActions';
  class Row extends React.Component{

addToCart=(id)=>{
    this.props.dispatch(addCart(this.props.token,id));

}
// viewProduct=(id)=>{
//  // 
  
// }

    render(){
        return(

<Card>
<Card.Content>
  <Card.Header className="card-header">
  <Link to={`/categories/${this.props.item._id}`}>
  <Image src={this.props.item.productImage} 
  //onClick={()=>this.viewProduct(this.props.item._id)} 
  className="img-fluid" alt="" />
  </Link>
  </Card.Header>
  <Card.Description>
  <h6 className="ProductName">{this.props.item.productName}</h6>
  <p className="price">Price: &nbsp;{this.props.item.price} ₹</p>
  <button className='addtoCart btn btn-ecommarce'  onClick={()=>this.addToCart(this.props.item._id)}>Add to Cart</button>
  </Card.Description>
</Card.Content>
</Card>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      token: state.login.token,
      singleProd:state.product.singleProd
      // addToCart:addCart(id)
  }
}
export default connect(mapStateToProps)(Row);
