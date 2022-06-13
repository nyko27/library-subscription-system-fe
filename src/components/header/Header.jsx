import React from 'react';
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";



export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="header" >

                    <Link to="/" className='home-link' exact={true} >
                        <h1 className="title">Library management system</h1>
                    </Link>


                    <NavLink to="/add-book" className={isActive => "nav-link" + (!isActive ? "_active" : "")} exact={true}>
                        Add new book
                    </NavLink>

                    <Dropdown className='nav-dropdown'>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Reader
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/add-reader">Create new</Dropdown.Item>
                            <Dropdown.Item href="/user-rents/">View rents</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='nav-dropdown'>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Financial report
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/library-report">General</Dropdown.Item>
                            <Dropdown.Item href="#/link to user's financial report">User specific</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

