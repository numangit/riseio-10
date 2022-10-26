import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import logo from '../TopNavigateBar/icons8-dove-50.png';

const BottomFooter = () => {
    return (
        <div className="bg-dark">
            <footer className="container text-center text-white d-flex flex-wrap justify-content-between align-items-center py-5 border-top">
                <ul className="nav col-md-4">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="courses" className="nav-link px-2 text-muted">Courses</Link></li>
                    <li className="nav-item"><Link to="faq" className="nav-link px-2 text-muted">FAQ</Link></li>
                    <li className="nav-item"><Link to="blogs" className="nav-link px-2 text-muted">Blog</Link></li>
                </ul>
                <p className="col-md-4 mb-0 text-muted mx-auto">Copyright © 2017–2022 Rise.io</p>
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><Link class="text-muted" to="/"><BsTwitter /></Link></li>
                    <li class="ms-3"><Link class="text-muted" to="/"><BsGithub /></Link></li>
                    <li class="ms-3"><Link class="text-muted" to="/"><BsInstagram /></Link></li>
                </ul>
            </footer>
        </div >
    );
};

export default BottomFooter;