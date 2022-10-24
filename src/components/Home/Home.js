import React from 'react';
import Lottie from "lottie-react";
import learn from "./80356-online-learning.json";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="mt-5 pt-5">
            <div className="d-block align-items-center d-lg-flex mt-lg-4">
                <div className='w-100 my-md-4'><Lottie animationData={learn} loop={true} /></div>
                <div className="mx-auto p-3 p-md-4 mt-lg-5 text-white">
                    <h1 className='display-4 fw-bold m-0'><span className="fw-lighter">Welcome to</span> Rise.io!</h1>
                    <p className='fs-4 mt-3 mt-sm-4'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                    <Link to={window.location == 'http://localhost:3000' ? "courses" : "../Courses"}><button type="button" className="btn btn-dark btn-lg m-1 m-md-3">Get started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;