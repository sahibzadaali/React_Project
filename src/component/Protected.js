import React from 'react';
import { Redirect,Route } from 'react-router-dom';

const Protected=({component:cmp,...rest})=>(
    <Route
    {...rest}
    render={(props)=>
        localStorage.getItem('login')?(
            <cmp {...props}/>
        ):
        <Redirect
        to="/login"/>
    }
    />
)
export default Protected;