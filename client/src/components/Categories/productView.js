import React from 'react';
import {viewProd} from '../../actions/productActions';
import {connect} from 'react-redux';
import {addCartQ} from '../../actions/productActions';
import {Button} from 'semantic-ui-react';
class ProductView extends React.Component{
    
    constructor(props){
        super();
        this.state={
            counter:1
        }
    }
    componentDidMount(){
        console.log(this.props); 
        //const id1=this.props.match.params.id
        this.props.dispatch(viewProd(this.props.token,this.props.pid));
    }
    addToCart=(id,counter)=>{
        this.props.dispatch(addCartQ(this.props.token,id,counter));
    
    }
    decrement=()=>{
        this.setState({...this.state,counter:this.state.counter-1})
    }
    increment=()=>{
        this.setState({...this.state,counter:this.state.counter+1})
    }
    render(){  
       
    return (
        
        <div className='profile'>
            <div className='row justify'>
            <div className='col-md-4'>
                <div className="Product-Image">
                <img src={this.props.singleProd.productImage} alt={this.props.singleProd.productName} style={{height:'auto',width:'auto'}}/>
                </div>
            </div>
            <div className='col-md-4 col-md-offset-2'>
            <h3>{this.props.singleProd.productName}</h3>
            <p><b className="count-space">Color:</b>{this.props.singleProd.productColor}</p>
            <p><b className="count-space">Price:</b>{this.props.singleProd.price} ₹</p>
            <p><b className="count-space">Product Description:</b>{this.props.singleProd.productDescription}</p>
            <p><b className="count-space">Product Brand:</b>{this.props.singleProd.productBrand}</p>
            <p><b className="count-space">Product Size:</b>{this.props.singleProd.productSize}</p>
            <Button disabled={(this.state.counter<2)} className="btn btn-ecommarce" onClick={()=>this.decrement()}>-</Button>
            <span className="counter-increment">{this.state.counter}</span>
            <Button disabled={(this.state.counter>4)} className="btn btn-ecommarce" onClick={()=>this.increment()}>+</Button>
            <br></br><Button className='addtoCart btn btn-success' onClick={()=>this.addToCart(this.props.singleProd._id,this.state.counter)}>Add</Button>
            </div>
             </div>

        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.login.token,
        singleProd: state.product.singleProd,
        //addToCart:addCart(id)
    }
}

export default connect(mapStateToProps)(ProductView);