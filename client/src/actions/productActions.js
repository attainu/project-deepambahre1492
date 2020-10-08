//import { response } from '../../../routes/product';
import {fetchLoading,loadingDone,logoutSuccess} from './loginActions';

//ACTION CONSTANTS
const API="http://localhost:5000/api/";
export const GET_PRODUCTLIST_SUCCESS = "GET_PRODUCTLIST_SUCCESS";
export const GET_PRODUCTLIST_FAILED = "GET_PRODUCTLIST_FAILED";
export const ADD_TO_LIST_SUCCESS = "ADD_TO_LIST_SUCCESS";
export const ADD_TO_LIST_FAILED = "ADD_TO_LIST_FAILED";
export const REMOVE_FROM_LIST_SUCCESS = "REMOVE_FROM_LIST_SUCCESS";
export const REMOVE_FROM_LIST_FAILED = "REMOVE_FROM_LIST_FAILED";
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS";
export const EDIT_ITEM_FAILED = "EDIT_ITEM_FAILED";
export const REMOVE_STATE = "REMOVE_STATE";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_CART_FAILED="ADD_TO_CART_FAILED"
export const GET_CART_SUCCESS="GET_CART_SUCCESS"
export const GET_CART_FAILED='GET_CART_FAILED'
export const GET_PRODUCT='GET_PRODUCT'
export const DELETE_CART_ONE='DELETE_CART_ONE'
export const CLEAR_CART='CLEAR_CART'
export const GET_PRODUCT_FAILED='GET_PRODUCT_FAILED'

//ACTIONS

export const getList = (token,search) => {
    return dispatch =>{
        let request = {
        method: "GET",
        mode: "cors",
        headers: {"Content-type":"application/json",token:token}
        }

        let url = `${API}product/`;
        if(search){
        url += "?productName="+search;
        }
        dispatch(fetchLoading());
        fetch(url,request).then(response => {
            dispatch(loadingDone());
            if(response.ok){
                response.json().then(data =>{
                    dispatch(getListSuccess(data));
            }).catch(error => dispatch(getListFailed('JSON parse error: '+error)));
        }else {
            if(response.status === 403){
                dispatch(removeState());
                dispatch(logoutSuccess());
            }
            dispatch(getListFailed('Server responded with status: '+response.status));
        }
        }).catch(error => {
            dispatch(loadingDone());
            dispatch(getListFailed('Server responded with error: '+error));
        })
    }
}

export const addToList = (token,productitem) => {
    return dispatch => {
        let request = {
        method: "POST",
        mode: "cors",
        headers: {token:token},
        body: productitem
        }
        dispatch(fetchLoading());
        fetch("http://localhost:5000/api/product",request).then(response => {
            dispatch(loadingDone());
            if(response.ok){
                dispatch(addToListSuccess());
                dispatch(getList(token));
            }
            else{
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(addToListFailed('Server responded with status: '+response.status));
        }
        }).catch(error => {
            dispatch(loadingDone());
            dispatch(addToListFailed('Server responded with error: '+error));
        });
    }
}

export const viewProd=(token,id)=>{
    return dispatch=>{
        let request = {
            method: "GET",
            mode: "cors",
            headers: {"Content-type":"application/json",token:token}
    }
    dispatch(fetchLoading());
    fetch("http://localhost:5000/api/product/"+id,request).then(response=>{
        dispatch(loadingDone());
        if(response.ok){
            response.json().then(data=>{
                dispatch(getProduct(data));
            }).catch(error=>dispatch(getProductFailed(`JSON PARSE ERRROR:`+error)));
        }
        else {
            if(response.status === 403){
                dispatch(removeState());
                dispatch(logoutSuccess());
            }
            dispatch(getListFailed('Server responded with status: '+response.status));
        }
    }).catch(error => {
        dispatch(loadingDone());
        dispatch(getProductFailed('Server responded with error: '+error));
    })
}
}

export const getCart=(token)=>{
    return dispatch=>{
        let request = {
            method: "GET",
            mode: "cors",
            headers: {"Content-type":"application/json",token:token}
            }
        dispatch(fetchLoading());
        fetch("http://localhost:5000/api/cart",request).then(response=>{
            dispatch(loadingDone());
            if(response.ok){
                // console.log(response.json());
                response.json().then(data =>{
                   console.log(data);
                    dispatch(getCartSuccess(data));
            }).catch(error => dispatch(getCartFailed('JSON parse error: '+error)));
            }
            else {
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(getListFailed('Server responded with status: '+response.status));
            }
            }).catch(error => {
                dispatch(loadingDone());
                dispatch(getCartFailed('Server responded with error: '+error));
            })
    }
}
export const addCart=(token,id)=>{
    return dispatch=>{
        let request = {
            method: "GET",
            mode: "cors",
            headers: {"Content-type":"application/json",token:token}
            }
        dispatch(fetchLoading());
        fetch("http://localhost:5000/api/cart/"+id,request).then(response=>{
            dispatch(loadingDone());
            if(response.ok){
                // console.log(response.json());
                response.json().then(data =>{
                    console.log(data);
                    dispatch(addCartSuccess(data.cart));
            }).catch(error => dispatch(addCartFailed('JSON parse error: '+error)));
            }
            else {
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(getListFailed('Server responded with status: '+response.status));
            }
            }).catch(error => {
                dispatch(loadingDone());
                dispatch(addCartFailed('Server responded with error: '+error));
            })
    }
}

export const deleteFromCart=(token,id)=>{
    return dispatch=>{
        let request = {
            method: "DELETE",
            mode: "cors",
            headers: {"Content-type":"application/json",token:token}
            }
        fetch("http://localhost:5000/api/cart/delete/"+id,request).then(response=>{
            if(response.ok){
                response.json().then(data=>{
                    dispatch(getCartSuccess(data.cart));
                }).catch(error => dispatch(addCartFailed('JSON parse error: '+error)));
            }
            else {
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(getListFailed('Server responded with status: '+response.status));
            }
            }).catch(error => {
                dispatch(loadingDone());
                dispatch(addCartFailed('Server responded with error: '+error));
            })
        }
    }

export const clearCart=(token)=>{
    return dispatch=>{
        let request = {
            method: "DELETE",
            mode: "cors",
            headers: {"Content-type":"application/json",token:token}
            }
            fetch("http://localhost:5000/api/cart/clear",request).then(response=>{
                if(response.ok){
                    response.json().then(data=>{
                        dispatch(getCartSuccess(data.cart));
                    }).catch(error => dispatch(addCartFailed('JSON parse error: '+error)));
                }
                }).catch(error => {
                    dispatch(loadingDone());
                    dispatch(addCartFailed('Server responded with error: '+error));
                })
        }
}
export const addCartQ=(token,id,counter)=>{
    return dispatch=>{
        let request = {
            method: "GET",
            mode: "cors",
            headers: {"Content-type":"application/json",token:token}
            }
        dispatch(fetchLoading());
        fetch("http://localhost:5000/api/cart/"+id+"/"+counter,request).then(response=>{
            dispatch(loadingDone());
            if(response.ok){
                // console.log(response.json());
                response.json().then(data =>{
                    console.log(data);
                    dispatch(addCartSuccess(data.cart));
            }).catch(error => dispatch(addCartFailed('JSON parse error: '+error)));
            }
            else {
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(getListFailed('Server responded with status: '+response.status));
            }
            }).catch(error => {
                dispatch(loadingDone());
                dispatch(addCartFailed('Server responded with error: '+error));
            })
    }
}

export const removeFromList = (token,id) =>{
    return dispatch => {
        let request = {
        method: "DELETE",
        mode: "cors",
        headers: {"Content-type":"application/json",token:token}
        }
        dispatch(fetchLoading());
        fetch(`${API}product/`+id,request).then(response => {
            dispatch(loadingDone());
            if(response.ok){
                dispatch(removeFromListSuccess());
                dispatch(getList(token));
                }
            else{
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(removeFromListFailed('Server responded with status: '+response.status));
            }
        }).catch(error => {
            dispatch(loadingDone());
            dispatch(removeFromListFailed('Server responded with error: '+error));
        });
    }
}

export const editItem = (token,item) => {
 
    return dispatch => {
        // eslint-disable-next-line
        let request = {
        method: "PUT",
        mode: "cors",
        headers: {"Content-type":"application/json",token:token},
        body: JSON.stringify(item)
        }
        dispatch(fetchLoading());
        fetch(`${API}product/`+item._id,request).then(response => {
            if(response.ok){
                dispatch(loadingDone());
                dispatch(editItemSuccess());
                dispatch(getList(token));
            }
            else{
                if(response.status === 403){
                    dispatch(removeState());
                    dispatch(logoutSuccess());
                }
                dispatch(editItemFailed('Server responded with status: '+response.status));
            }
        }).catch(error => {
            dispatch(loadingDone());
            dispatch(editItemFailed('Server responded with error: '+error));
        });
    }
}



//ACTION CREATORS

const getProduct=(data)=>{
    console.log(data);
    return {
        type: GET_PRODUCT,
        data:data
    }
}
const getProductFailed=(err)=>{
    return {
        type: GET_PRODUCT_FAILED,
        error:err
    }
}
const getListSuccess = (data) => {
    return {
        type: GET_PRODUCTLIST_SUCCESS,
        list: data
    }
}
const getCartSuccess=(data)=>{
    return {
        type: GET_CART_SUCCESS,
        cart:data
    }
}

const getCartFailed=(error)=>{
    return {
        type: GET_CART_FAILED,
        error: error
    }
}

const addCartSuccess=(data)=>{
    if(data.message!=="Added to cart alreday"){
    return {
        type: ADD_TO_CART,
        cart:data
    }
}
}
const addCartFailed=(error)=>{
    return {
        type: ADD_TO_CART_FAILED,
        error:error
    }
}

const getListFailed = (error) => {
    return {
        type: GET_PRODUCTLIST_FAILED,
        error: error
    }
}

const addToListSuccess = () => {
    return {
        type: ADD_TO_LIST_SUCCESS
    }
}

const addToListFailed = (error) => {
    return {
        type: ADD_TO_LIST_FAILED,
        error:error
    }
}

const removeFromListSuccess = () => {
    return {
        type: REMOVE_FROM_LIST_SUCCESS
    }
}

const removeFromListFailed = (error) => {
    return {
        type: REMOVE_FROM_LIST_FAILED,
        error: error
    }
}

const editItemSuccess = () => {
    return {
        type: EDIT_ITEM_SUCCESS
    }
}

const editItemFailed = (error) => {
    return {
        type: EDIT_ITEM_FAILED,
        error:error
    }
}

export const removeState = () => {
    return {
        type: REMOVE_STATE
    }
}
