import axios from 'axios';
import React, { useState } from 'react'
import NavBarMenu from './NavBarMenu';

function RestaurantCreate() {
    const [data, setData] = useState({
        name: "",
        email: "",
        rating: "",
        address: ""
    })

    const create = () => {
        axios.post('http://localhost:3000/restaurantdb',data)
        .then(res=>{
            alert("Restaurant had been updated");
        })
        .then(function(error){
            console.log(error);
        })
    }

    const handleChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
            <NavBarMenu />
            <h1>Restaurant Create</h1>
            <input type="text" onChange={handleChange} placeholder="Restaurant Name" name="name" /><br /><br />
            <input type="email" onChange={handleChange} placeholder="Restaurant Email" name="email" /><br /><br />
            <input type="text" onChange={handleChange} placeholder="Restaurant Rating" name="rating" /><br /><br />
            <input type="text" onChange={handleChange} placeholder="Restaurant Address" name="address" /><br></br>
            <button onClick={() => create()}>Add Restaurant</button>
        </div>
    )
}

export default RestaurantCreate
