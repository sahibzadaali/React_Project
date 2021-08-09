import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
<NavBarMenu/>

class RestaurantDetail extends Component {
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>RestaurantDetail</h1>
            </div>
        );
    }
}

export default RestaurantDetail;