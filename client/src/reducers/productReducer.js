import{
    GET_PRODUCTLIST_SUCCESS,
    GET_PRODUCTLIST_FAILED,
    ADD_TO_LIST_SUCCESS,
    ADD_TO_LIST_FAILED,
    REMOVE_FROM_LIST_SUCCESS,
    REMOVE_FROM_LIST_FAILED,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAILED,
    REMOVE_STATE,
    GET_PRODUCT_FAILED,
    GET_PRODUCT,
    ADD_TO_CART,
    GET_CART_SUCCESS,GET_CART_FAILED
} from '../actions/productActions';

// const getInitialState = () => {
//     if(sessionStorage.getItem("productstate")){
//         return JSON.parse(sessionStorage.getItem("productstate"))
//     } else {
//         return {
//             list: [],
//             error: "",
//             cart:[]
//         }
//     }
// }

// const saveToStorage = (state) => {
//     sessionStorage.setItem('productstate',JSON.stringify(state));
//     sessionStorage.setItem('cartState',JSON.stringify(state));
// }

//const initialState = getInitialState();
const initialState={
    list:[],
    error:"",
    cart:[],
    singleProd:{},
    cartlength:0

}

const productReducer = (state=initialState,action) => {
    //console.log('productReducer, action type: '+action.type);
    let tempState = {};
    switch(action.type) {
        case GET_PRODUCTLIST_SUCCESS:
            tempState = {
                ...state,
                list:action.list,
                error:''
            }
            //saveToStorage(tempState);
        return tempState

        case GET_PRODUCTLIST_FAILED:
            tempState = {
                ...state,
                list:[],
                error:action.error
            }
            //saveToStorage(tempState);
        return tempState
        case ADD_TO_LIST_SUCCESS:
            tempState = {
                ...state,
                error:''
            }
           // saveToStorage(tempState);
        return tempState
        case ADD_TO_LIST_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
           // saveToStorage(tempState);
        return tempState
        case REMOVE_FROM_LIST_SUCCESS:
            tempState = {
                ...state,
                error:''
            }
           // saveToStorage(tempState);
        return tempState
        case REMOVE_FROM_LIST_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
          //  saveToStorage(tempState);
        return tempState
        case EDIT_ITEM_SUCCESS:
            tempState = {
                ...state,
                error:''
            }
            //saveToStorage(tempState);
        return tempState
        case EDIT_ITEM_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            //saveToStorage(tempState);
        return tempState
        
        case REMOVE_STATE:
            tempState = {
                list:[],
                error:''
            }
           // saveToStorage(tempState);
        return tempState
        case ADD_TO_CART:
           // const cartItems=state.cart;
            const newItem=action.cart

            return {
                ...state,
                // list,
                cart:newItem,
                error:'',
                cartlength:newItem.length        
            }
        case GET_PRODUCT:
            tempState={
                ...state,
                singleProd:action.data
            }
            
            return tempState
        case GET_PRODUCT_FAILED:
            tempState={
                ...state,
                error:action.error
            }
            return tempState
        case GET_CART_SUCCESS:
            const cartList=action.cart;
            return {
                ...state,
                cart: cartList,
                error:'',
                cartlength:cartList.length
            }
        case GET_CART_FAILED:
            return {
                ...state,
                error:''
            }
        default:
            return state;
    }
}

export default productReducer;