const initialState={
    list:[],
    loading:false,
    error:null
}

const RestaurantReducerList=(state=initialState,action)=>{
    switch(action.type){
        case "RESTAURANT_LIST_REQUEST":return{
            ...state,
            loading:true
        }
        case "RESTAURANT_LIST_SUCCESS":return{
            ...state,
            loading:false,
            list:action.list
        }
        case "RESTAURANT_LIST_FAILURE":return{
            ...state,
            loading:false,
            error:action.message
        }
        default: return {state}
    }
}

export default RestaurantReducerList;