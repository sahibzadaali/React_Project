import {all} from 'redux-saga/effects';
import restaurantUserSage from './handlers/FetchRestaurantList';

export default function* rootSagas(){
    yield all ([restaurantUserSage]);
}