import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            rating:"",
            address:""
        }
    }
    create(){
        fetch('http://localhost:3000/restaurantdb',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            console.log(result,'result');
            result.json().then((resp)=>{
                alert("Restaurant has been added");
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Restaurant Name" /><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Restaurant Email" /><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                        placeholder="Restaurant Rating" /><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                        placeholder="Restaurant Address" /><br /><br />
                        <button onClick={()=>{this.create()}}>Add Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;