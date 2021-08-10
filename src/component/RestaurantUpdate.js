import React, { useState, useEffect, match } from 'react';
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
        fetch('http://localhost:3000/restaurantdb/' + match.params.id).then((response) => {
            console.log(params.id, 'response');
            response.json().then((result) => {
                console.log(result, 'result');
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

    const update = () => {
        console.log("Done");
        fetch('http://localhost:3000/restaurantdb/' + data.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result, 'result');
            result.json().then(() => {
                alert("Restaurant had been updated");
            })
        })
    }

    const handleChange = e => {
        setData({
            [e.target.name]: e.target.value
        })
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
