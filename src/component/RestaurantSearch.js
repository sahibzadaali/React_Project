import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class RestaurantSearch extends Component {
    constructor(){
        super()
        this.setState={
            searchData:null
        }
    }

    search(key){
        fetch('http://localhost:3000/restaurantdb?q='+key).then((data)=>{
            data.json().then((resp)=>{
                console.log(resp,'resp');
                this.setState({search:resp})
            })
        })
    }

    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Search</h1>
                <input type="text" onChange={(event)=>this.search(event.target.value)}></input>
            </div>
        );
    }
}

export default RestaurantSearch;