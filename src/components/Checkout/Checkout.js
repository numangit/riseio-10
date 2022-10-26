import React from 'react';
import { RiVisaLine } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";
import { MdOutlineTopic, MdOutlinePriceChange } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../TopNavigateBar/icons8-dove-50.png';

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const { price, title } = selectedCourse;
    return (
        <div className="my-5 py-5">
            <div className="bg-glass-dark text-white my-2 my-lg-5 col-11 col-lg-5 mx-auto p-4 rounded-5">
                <img className="mb-4" src={logo} alt="" width="72" height="57" />
                <h2 className="mb-2 fw-normal">Checkout</h2>
                <form className="text-start p-4">
                    <p className="fs-5">Purchase Details</p>
                    <div className="d-lg-flex">
                        <span className="py-0 me-auto"><small className="text-muted"><MdOutlineTopic /> Topic : </small>{title}</span>
                        <span className='ms-auto pt-3 pt-lg-0'><small className="text-muted"><MdOutlinePriceChange /> Price :</small> $ {price}</span>
                    </div>
                    <hr />
                    <p className="fs-5">Address</p>
                    <div className="form-floating text-dark my-3">
                        <input type="address" className="form-control" id="floating" placeholder="Address" required />
                        <label htmlFor="floatingPassword">Address</label>
                    </div>
                    <hr />
                    <p className="fs-5 ">Payment Methods</p>
                    <div className='d-lg-flex justify-content-around'>
                        <p className='btn btn-outline-light p-2 m-0 p-0 rounded mt-2 col-12 col-md-auto text-center'><RiVisaLine className="fs-3" /> <small>Payment</small></p>
                        <p className='btn btn-outline-light p-2 m-0 p-0 rounded mt-2 col-12 col-lg-4 text-center'><BsPaypal /> <small>Paypal</small></p>
                        <p className='btn btn-outline-light p-2 m-0 p-0 rounded mt-2 col-12 col-md-auto text-center'><FaCcMastercard /> <small>MasterCard</small></p>
                    </div>

                    <Link to={"/"} className='mx-auto'><button className="btn btn-lg w-100 btn-warning fw-semibold  my-5" type="submit">Checkout  <BsBagCheck /></button></Link>
                    <p className="mt-2 mb-3 text-muted text-center">Copyright © 2017–2022 Rise.io</p>
                </form>
            </div>
        </div>
    );
};

export default Checkout;