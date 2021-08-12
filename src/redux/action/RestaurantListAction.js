import axios from "axios"
import { RESTAURANT_LIST_FAILURE, RESTAURANT_LIST_REQUEST, RESTAURANT_LIST_SUCCESS } from "../actiontype"

export const restaurantListRequest=()=>{
    return{
        type:RESTAURANT_LIST_REQUEST
    }
}

export const restaurantListSuccess=(list)=>{
    return{
        type:RESTAURANT_LIST_SUCCESS,
        payload:list
    }
}

export const restaurantListFailure=(error)=>{
    return{
        type:RESTAURANT_LIST_FAILURE,
        payload:error
    }
}
console.log("Done")
export const fetchRestaurantList=()=>{
    return(dispatch)=>{
        dispatch(restaurantListRequest)
        axios.get(' http://localhost:3000/restaurantdb')
        .then(response=>{
            const resultList = response;
            dispatch(restaurantListSuccess(resultList));
        })
        .catch((error)=>{
            const errorMsg = error.message
            dispatch(restaurantListFailure(errorMsg))
        })
    }
}