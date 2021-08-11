import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, match } from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

function RestaurantUpdate() {
    const [data, setData] = useState({
        name: "",
        email: "",
        rating: "",
        address: ""
    })

    const params = useParams();
    useEffect(() => {
        fetch('http://localhost:3000/restaurantdb/'+params.id).then((response) => {
            response.json().then((result) => {
                setData({
                    name: result.name,
                    email: result.email,
                    id: result.id,
                    rating: result.rating,
                    address: result.address
                })
            })
        })
    }, []);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/restaurantdb/'+params.id)
    //     .then((response)=>{
    //         setData({
    //             response:response.name,
    //             response:response.email,
    //             response:response.id,
    //             rating:response.rating,
    //             address:response.address
    //         })
    //     })
    // }, []);

    
    const update = ()=>{
        axios.put(`http://localhost:3000/restaurantdb/${data.id}`,data)
        .then((response)=>{
            alert("Restaurant had been updated")
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
            <h1>Restaurant Update</h1>
            <div>
                <NavBarMenu />
                <input onChange={handleChange}
                    placeholder="Restaurant Name" value={data.name} name="name" /><br /><br />
                <input onChange={handleChange}
                    placeholder="Restaurant Email" value={data.email} name="email" /><br /><br />
                <input onChange={handleChange}
                    placeholder="Restaurant Rating" value={data.rating} name="rating" /><br /><br />
                <input onChange={handleChange}
                    placeholder="Restaurant Address" value={data.address} name="address" /><br /><br />
                <button onClick={() => { update() }}>Update Restaurant</button>
            </div>
        </div>
    )
}

export default RestaurantUpdate
