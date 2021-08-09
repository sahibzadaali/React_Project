import React, { Component } from 'react';
import { Navbar, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
       this.getData();
    }

    getData(){
        fetch('http://localhost:3000/restaurantdb')
        .then(res => res.json())
        .then((result) => {
            this.setState({ list: result })
        })
    }

    delete(id){
        fetch('http://localhost:3000/restaurantdb/'+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then(()=>{
                alert("Restaurant had been Deleted");
                this.getData();
            })
        })
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <Navbar/>
                <h1>Restaurant List</h1>
                {list ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Rating</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, i) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.email}</td>
                                    <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}/></Link></td>
                                    <td><button onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    : <span>Please Wait</span>}
            </div>
        );
    }
}

export default RestaurantList;