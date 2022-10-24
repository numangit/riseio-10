import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import notfound from "./98642-error-404.json";
import './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-navy my-0 py-3 py-md-0" id="main">
                <div className="text-center">
                    <div className='col-12 col-lg-4 mx-auto my-lg-0 py-lg-0'><Lottie animationData={notfound} loop={true} /></div>
                    <div className='col-10 col-md-8 mx-auto my-lg-0 py-5 pt-lg-3 pb-lg-5'>
                        <p className='fs-4'>Oops! Looks like you're lost in a world of error. <br className='d-none d-md-block' /> Please return back to reality by clicking the button below.</p>
                        <Link to="/"><button type="button" className="btn btn-dark btn-lg ">Return Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;