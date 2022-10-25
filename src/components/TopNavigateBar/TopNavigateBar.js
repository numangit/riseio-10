import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from './icons8-dove-50.png';
import './TopNavigateBar.css';
import Switch from './Switch/Switch';

const TopNavigateBar = () => {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" bg="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img className="w-25" src={logo} alt="" />
                        <span className='fw-bolder fs-3'> Rise<span className="logo-color">.</span>io</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto fs-6">
                            <ul className="navbar-nav ">
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} aria-current="page" to="home">Home</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} aria-current="page" to="courses">Courses</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} to="faq">FAQ</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} to="blogs">Blogs</NavLink>
                                </li>
                            </ul>
                        </Nav>
                        {/* {user?.email ? <Link></Link> : <button type="button" class="btn btn-outline-success btn-sm rounded-pill">Log in</button>} */}
                        <Switch></Switch>
                        <Link to="signin">
                            <button type="button" className="fs-6 btn btn-outline-light btn-sm rounded-pill" title="Signin">Sign in</button>
                        </Link>
                    </Navbar.Collapse>

                </Container>
            </Navbar >
        </div >
    );
};

export default TopNavigateBar;