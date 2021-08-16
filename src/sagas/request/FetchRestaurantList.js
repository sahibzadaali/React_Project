import axios from "axios";

const url="http://localhost:3000/restaurantdb";

const FetchRestaurantList=()=>{
     axios.get(url)
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        throw error;
    })
}

export default FetchRestaurantList;