import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home';
import RestaurantUpdate from './component/RestaurantUpdate';
import RestaurantCreate from './component/RestaurantCreate';
import RestaurantDetail from './component/RestaurantDetail';
import RestaurantSearch from './component/RestaurantSearch';
import RestaurantList from './component/RestaurantList';
import Login from './component/Login';
import Logout from './component/Logout';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
       <Route path='/login'
        render={props=>(
          <Login {...props}/>
        )}
        >  
        </Route>
        <Route path='/logout' component={Logout}/>
        <Protected exact path="/" component={Home}/>
        <Protected  path="/list" component={RestaurantList}/>
        <Protected  path="/update/:id" component={RestaurantUpdate}/>
        {/* <Route path="/update" render={props=>(
          <RestaurantUpdate {...props}/>
        )}/> */}
        <Protected  path="/details" component={RestaurantDetail}/>
        <Protected  path="/create" component={RestaurantCreate}/>
        <Protected  path="/search" component={RestaurantSearch}/>
 
      </BrowserRouter>
    </div>
  );
}

export default App;
