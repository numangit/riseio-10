import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import logo from '../TopNavigateBar/icons8-dove-50.png';

const BottomFooter = () => {
    return (
        <div className="bg-dark">
            <div className="container text-center text-white d-lg-flex py-5 border-top">
                <div className="mx-auto">
                    <ul className="nav col-md-4">
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                        <li className="nav-item"><Link to="courses" className="nav-link px-2 text-muted">Courses</Link></li>
                        <li className="nav-item"><Link to="faq" className="nav-link px-2 text-muted">FAQ</Link></li>
                        <li className="nav-item"><Link to="blogs" className="nav-link px-2 text-muted">Blog</Link></li>
                    </ul>
                </div>
                <hr className="my-1 d-lg-none" />
                <div className="vr d-none d-lg-block col-lg-1 mx-auto"></div>
                <div className="mx-auto flex-wrap px-1 col-lg-5 px-lg-3">
                    <h4>About us</h4>
                    <hr className="d-none d-lg-block p-1" />
                    <p>Rise.io is a global destination for teaching and learning online. It was founded in july 2017 by Numan. As of July 2022, the platform has more than 54 million students, 204,000 courses, and 71,000 instructors teaching courses in over 75 languages.</p>
                    <p className="my-2 text-muted mx-auto  d-none d-lg-block">Copyright © 2017–2022 Rise.io</p>
                </div>
                <hr className="my-1 d-lg-none" />
                <div className="vr d-none d-lg-block col-lg-1 mx-auto"></div>
                <div className="mx-auto p-2 my-auto">
                    <Link className="navbar-brand" to="/"><img className="w-25" src={logo} alt="" /><span className="fw-bolder fs-3"> Rise<span className="logo-color">.</span>io</span></Link>
                    <p className="my-2 text-muted mx-auto">Follow us on:</p>
                    <div>
                        <Link class="mx-2 text-muted" to="/"><BsTwitter /></Link>
                        <Link class="mx-2 text-muted" to="/"><BsGithub /></Link>
                        <Link class="mx-2 text-muted" to="/"><BsInstagram /></Link>
                    </div>
                    <p className="my-2 text-muted mx-auto d-lg-none">Copyright © 2017–2022 Rise.io</p>
                </div>
            </div>
        </div >
    );
};

export default BottomFooter;