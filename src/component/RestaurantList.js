import React,{useState,useEffect} from 'react';
import { Navbar, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu';

function RestaurantList() {
    const [list,setList]=useState([]);

    useEffect(() => {
        getData();
      });
 
     const getData=()=>{
         fetch('http://localhost:3000/restaurantdb')
         .then(res => res.json())
         .then((result) => {
            setList(result)
         })
     }
 
     const deleteItem = (id) => {
         fetch('http://localhost:3000/restaurantdb/'+id,{
             method:"DELETE",
         }).then((result)=>{
             result.json().then(()=>{
                 alert("Restaurant had been Deleted");
                 getData();
             })
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
