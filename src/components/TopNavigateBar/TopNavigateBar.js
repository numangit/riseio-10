import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from './icons8-dove-50.png';
import './TopNavigateBar.css';
import Switch from './Switch/Switch';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { FaUserCircle } from 'react-icons/fa';

const TopNavigateBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg fixed-top navbar-dark bg-glass" bg="" expand="lg">
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
                        <Switch></Switch>
                        {user?.email ?
                            <> {user?.photoURL ? <img className="rounded-circle w-custom bg-light" src={user?.photoURL} alt="" title={user?.displayName} />
                                : <FaUserCircle className="fs-2 text-white" title={user?.displayName} />}
                            </>
                            : <Link to="signin">
                                <button type="button" className="fs-6 btn btn-outline-light btn-sm rounded-3" title="Signin">Sign in</button>
                            </Link>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar >
        </div >
    );
};

export default TopNavigateBar;