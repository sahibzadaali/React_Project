import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import NavBarMenu from './NavBarMenu';


const Login = () => {
    let history = useHistory();
    const [data, setData] = useState({
        name: "",
        password: ""
    })

    const Login = () => {
        axios.get('http://localhost:3000/login')
        .then((response)=>{
            if(response.status==200){
                localStorage.setItem('login',JSON.stringify(response));
               history.push('/list');
            }
            else{
                alert("Please check username and password")
            }
        })
    }

    const handleChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
            <NavBarMenu />
            <h1>Login</h1>
            <input type="text" placeholder="Enter name" name="user" onChange={handleChange} />
            <input type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
            <button onClick={() => Login()}>Login</button>
        </div>
    )
}

export default Login
