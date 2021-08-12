import { RESTAURANT_LIST_FAILURE, RESTAURANT_LIST_REQUEST, RESTAURANT_LIST_SUCCESS } from "../actiontype"

const initialState=[{
    loading:false,
    error:'',
    list:[]
}]

const RestaurantListReducer=(state=initialState,action)=>{
    switch(action.type){
        case RESTAURANT_LIST_REQUEST:return{
            loading:true
        }
        case RESTAURANT_LIST_SUCCESS:return{
            loading:false,
            list:action.payload,
            error:''
        }
        case RESTAURANT_LIST_FAILURE:return{
            loading:false,
            list:[],
            error:action.payload
        }
        default:return{
            state
        }
    }
}
export default RestaurantListReducer