import { call,put,takeEvery } from "redux-saga/effects";
import FetchRestaurantList from "../request/FetchRestaurantList";

function* handleRestaurantList(){
    try{
        const list=yield call(FetchRestaurantList);
        yield put({type:"RESTAURANT_LIST_SUCCESS",list:list})
    }
    catch(error){
        yield put ({type:"RESTAURANT_LIST_FAILURE",message:error.message})
    }
}

function* restaurantUserSage(){
    yield takeEvery("RESTAURANT_LIST_REQUEST",handleRestaurantList);
}

export default restaurantUserSage