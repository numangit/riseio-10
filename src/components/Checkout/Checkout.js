import React from 'react';
import { SiVisa } from "react-icons/si";
import { BsPaypal } from "react-icons/bs";
import { MdOutlineTopic, MdOutlinePriceChange } from "react-icons/md";
import { FaCcMastercard, FaCrown } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../TopNavigateBar/icons8-dove-50.png';

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const { price, title } = selectedCourse;
    return (
        <div className="mt-5 pt-5">
            <div className="bg-dark text-white my-2 my-lg-5 col-11 col-lg-5 mx-auto p-4 rounded-4">
                <img className="mb-4" src={logo} alt="" width="72" height="57" />
                <h1 className="mb-2 fw-normal">Checkout</h1>
                <div className="text-start p-4">
                    <p className="fs-5">Address</p>
                    <div className="form-floating text-dark fs-6 my-3">
                        <input type="address" className="form-control" id="floating" placeholder="Address" required />
                        <label htmlFor="floatingPassword">Address</label>
                    </div>
                    <hr />
                    <p className="fs-5 ">Payment Methods</p>
                    <div className='d-lg-flex justify-content-around'>
                        <p className='bg-glass p-2 rounded mt-2'> <SiVisa />  Visa Payment </p>
                        <p className='bg-glass p-2 rounded mt-2 w-25'> <BsPaypal /> Paypal </p>
                        <p className='bg-glass p-2 rounded mt-2 w-25'> <FaCcMastercard /> MasterCard </p>
                    </div>
                    <hr />
                    <p className="fs-5">Purchase Details</p>
                    <div className="d-lg-flex">
                        <span className="py-0 me-auto"><small className="text-muted"><MdOutlineTopic /> Topic : </small>{title}</span>
                        <span className='ms-auto pt-3 pt-lg-0'><small className="text-muted"><MdOutlinePriceChange /> Price :</small> $ {price}</span>
                    </div>
                    <Link to={"/"} className='mx-auto'><button className="btn w-100 btn-outline-warning fw-semibold  my-5">Checkout  <FaCrown /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;