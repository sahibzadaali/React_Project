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
    render() {
        return (
            <div>
                <h1>Restaurant Update</h1>
                <div>
                    <NavBarMenu/>
                    <input onChange={(event) => { this.setState({ name: event.target.value })}}
                        placeholder="Restaurant Name" value={this.state.name}/><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value })}}
                        placeholder="Restaurant Email" value={this.state.email}/><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value })}}
                        placeholder="Restaurant Rating" value={this.state.rating}/><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value })}}
                        placeholder="Restaurant Address" value={this.state.address}/><br /><br />
                        <button onClick={()=>{this.update()}}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;