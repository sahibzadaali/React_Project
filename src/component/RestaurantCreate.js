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

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Create</h1>
                <div>
                        <input onChange={this.handleChange}
                        placeholder="Restaurant Name" name="name"/><br /><br />
                    <input onChange={this.handleChange}
                        placeholder="Restaurant Email" name="email"/><br /><br />
                    <input onChange={this.handleChange}
                        placeholder="Restaurant Rating" name="rating"/><br /><br />
                    <input onChange={this.handleChange}
                        placeholder="Restaurant Address" name="address"/><br /><br />
                        <button onClick={()=>{this.create()}}>Add Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;