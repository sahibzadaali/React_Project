import React,{useState,useEffect} from 'react';
import { Navbar, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function RestaurantList() {
    const [list,setList]=useState([]);

    useEffect(() => {
        getData();
      },[]);
 
    const getData=()=>{
         axios.get('http://localhost:3000/restaurantdb')
         .then(function (response){
             setList(response.data);
         })
         .then(function(error){
             console.log(error);
         })
     }
 
    const deleteItem = (id) =>{
        axios.delete(`http://localhost:3000/restaurantdb/${id}`)
        .then(res=>{
            getData();
        })
        .then(function(error){
            console.log(error);
        })
    }
    
    return (
        <div>
            <NavBarMenu/>
            <h1>Restaurant List</h1>
            {list && list.length>0 ?
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
                                <td><button onClick={()=>deleteItem(item.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                : <span>Please Wait</span>}
        </div>
    );
}

export default RestaurantList
