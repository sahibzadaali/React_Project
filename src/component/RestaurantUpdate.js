import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            rating:"",
            address:"",
            id:""
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/restaurantdb/'+this.props.match.params.id).then((response)=>{
            console.log(response,'response');
            response.json().then((result)=>{
                this.setState({
                    name:result.name,
                    email:result.email,
                    id:result.id,
                    rating:result.rating,
                    address:result.address
                })
            })
        })
    }

    update(){
        console.log("Done");
        fetch('http://localhost:3000/restaurantdb/'+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then(()=>{
                alert("Restaurant had been updated");
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
                <h1>Restaurant Update</h1>
                <div>
                    <NavBarMenu/>
                         <input onChange={this.handleChange}
                        placeholder="Restaurant Name" value={this.state.name} name="name"/><br /><br />
                    <input onChange={this.handleChange}
                        placeholder="Restaurant Email" value={this.state.email} name="email"/><br /><br />
                    <input onChange={this.handleChange}
                        placeholder="Restaurant Rating" value={this.state.rating} name="rating"/><br /><br />
                    <input onChange={this.handleChange}
                        placeholder="Restaurant Address" value={this.state.address} name="address"/><br /><br />
                        <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;