import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faPlus,faList,faUser,faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                  <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Reasturant</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                 <Nav.Link href="#home"><Link to='/'><FontAwesomeIcon icon={faHome}/> Home</Link></Nav.Link>
                 <Nav.Link href="#home"><Link to='/list'><FontAwesomeIcon icon={faList}/>List</Link></Nav.Link>
                 <Nav.Link href="#home"> <Link to='/create'><FontAwesomeIcon icon={faPlus}/>Create</Link></Nav.Link>
                 <Nav.Link href="#home"> <Link to='/search'><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link>
                 {
                     localStorage.getItem('login')
                     ?<Nav.Link href="#home"> <Link to='/logout'><FontAwesomeIcon icon={faUser}/>Logout</Link></Nav.Link>
                     :<Nav.Link href="#home"> <Link to='/login'><FontAwesomeIcon icon={faUser}/>Login</Link></Nav.Link>
                 }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </div>
        );
    }
}

export default NavBarMenu;