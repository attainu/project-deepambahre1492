import{
    GET_PRODUCTLIST_SUCCESS,
    GET_PRODUCTLIST_FAILED,
    ADD_TO_LIST_SUCCESS,
    ADD_TO_LIST_FAILED,
    REMOVE_FROM_LIST_SUCCESS,
    REMOVE_FROM_LIST_FAILED,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAILED,
    REMOVE_STATE
} from '../actions/productActions';

const getInitialState = () => {
    if(sessionStorage.getItem("productstate")){
        return JSON.parse(sessionStorage.getItem("productstate"))
    } else {
        return {
            list: [],
            error: ""
        }
    }
}

const saveToStorage = (state) => {
    sessionStorage.setItem('productstate',JSON.stringify(state));
}

const initialState = getInitialState();

const productReducer = (state=initialState,action) => {
    //console.log('productReducer, action type: '+action.type);
    let tempState = {};
    switch(action.type) {
        case GET_PRODUCTLIST_SUCCESS:
            tempState = {
                list:action.list,
                error:''
            }
            saveToStorage(tempState);
        return tempState
        case GET_PRODUCTLIST_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
        return tempState
        case ADD_TO_LIST_SUCCESS:
            tempState = {
                ...state,
                error:''
            }
            saveToStorage(tempState);
        return tempState
        case ADD_TO_LIST_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
        return tempState
        case REMOVE_FROM_LIST_SUCCESS:
            tempState = {
                ...state,
                error:''
            }
            saveToStorage(tempState);
        return tempState
        case REMOVE_FROM_LIST_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
        return tempState
        case EDIT_ITEM_SUCCESS:
            tempState = {
                ...state,
                error:''
            }
            saveToStorage(tempState);
        return tempState
        case EDIT_ITEM_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(tempState);
        return tempState
        
        case REMOVE_STATE:
            tempState = {
                list:[],
                error:''
            }
            saveToStorage(tempState);
        return tempState
        default:
            return state;
    }
}

export default productReducer;