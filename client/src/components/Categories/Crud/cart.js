import React from 'react'
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {Button} from 'semantic-ui-react';
 import {getCart,deleteFromCart,clearCart} from '../../../actions/productActions';
class Cart extends React.Component{
    componentDidMount(){
        this.props.dispatch(getCart(this.props.token));
    }
    deleteFromCart=(id)=>{
        this.props.dispatch(deleteFromCart(this.props.token,id));
    }
    clearCart=()=>{
        this.props.dispatch(clearCart(this.props.token));
    }
    render(){ 
       console.log(this.props.cart);
    return (
        <div className="row justify">
            <div className="col-md-8 col-md-2">
 
        <div className="cartBox">
            {this.props.cart.length<1 ?(
                <div><h1>Cart is empty</h1></div>
            ):(
                <table className="table-responsive">
                <tbody>
                <tr>
                    <th>ProductImage</th>
                    <th>ProductName</th>
                    <th>ProductColor</th>
                    <th>ProductQuantity</th>
                    <th>Price</th>
                </tr>
                { this.props.cart.map(prod=>(
                <tr key={prod._id}>
                    <td><img src={prod.productImage} style={{height:'80px',width:'auto'}} alt={prod.productName}/></td>
                    <td>{prod.productName}</td>
                    <td>{prod.productColor}</td>
                    <td>{prod.quantity}</td>               
                    <td>{prod.price}</td>
                    <td><Button onClick={()=>this.deleteFromCart(prod._id)} className="btn btn-ecommarce">remove</Button></td>
                </tr>
           
            ))}
           
             </tbody>
             <span className="cart-order-btns">{(this.props.cart.length>0)?(<div className="clear-cart"><Button onClick={()=>this.clearCart()} className="btn btn-primary">Clear Cart</Button></div>):''}
             <Link to="/OrderSuccess" className="btn btn-primary">Checkout</Link></span>
             </table>
            )}
                            
        </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    return {
        token: state.login.token,
        cart: state.product.cart
    }
}
export default connect(mapStateToProps)(Cart)