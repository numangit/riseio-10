import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { MdOutlineTopic, MdOutlinePriceChange } from "react-icons/md";
import { FaChalkboardTeacher, FaCrown } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const details = useLoaderData();
    const { Instructor, course_id, description, hours, picture, price, title, topic1, topic2, topic3 } = details;

    return (
        <div className="my-5 py-5">
            <div >
                <div>
                    <div className="d-flex my-2 my-lg-2 col-11 col-lg-9 col-10 mx-auto  bg-glass-dark text-white p-2 rounded-3">
                        <img className="w-25 m-2 rounded" src={picture} alt="Card image" />
                        <div className='mx-auto p-4'>
                            <div className="d-lg-flex">
                                <span className="fs-4 py-0 fw-bold me-auto">{title}</span>
                                <span className='ms-auto pt-3 pt-lg-0'><button className="btn btn-sm btn-outline-light fw-semibold">Download PDF <FiDownload /></button></span>
                            </div>
                            <hr className="d-none d-sm-block" />
                            <p className="d-none d-sm-block py-0 text-start">Description :</p>
                            <p className="d-none d-sm-block  py-0 text-start">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-glass-dark text-white my-2 my-lg-3 col-11 col-lg-9 mx-auto p-2 rounded-3 d-lg-flex">
                    <div className="text-start col-11 col-lg-7 p-4">
                        <p className="text-center fs-4 fw-semibold">Skills</p>
                        <hr className="text-Muted" />
                        <span className='d-flex'><BsCheckLg className="mt-1 fs-5" />
                            <p className="ms-1 p-0">{topic1}</p>
                        </span>
                        <span className='d-flex'><BsCheckLg className="mt-1 fs-5" />
                            <p className="ms-1 p-0">{topic2}</p>
                        </span>
                        <span className='d-flex'><BsCheckLg className="mt-1 fs-5" />
                            <p className="ms-1 p-0">{topic3}</p>
                        </span>
                    </div>
                    <div className="vr d-none d-lg-block col-lg-1 mx-auto"></div>
                    <div className="text-start col-11 col-lg-4 p-4">
                        <p className="text-center fs-4 fw-semibold">Details</p>
                        <hr />
                        <p><small className="text-muted"><MdOutlineTopic /> Topic : </small>{title}</p>
                        <p><small className="text-muted"><FaChalkboardTeacher /> Instructor : </small>{Instructor}</p>
                        <p><small className="text-muted"><BiTime /> Duration :</small> {hours} <small className="text-muted">hrs</small></p>
                        <p><small className="text-muted"><MdOutlinePriceChange /> Price :</small> $ {price}</p>
                        <Link to={`../Checkout/${course_id}`} className='mx-auto'><button className="btn w-100 btn-warning fw-semibold my-2">Get Premium Access  <FaCrown /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;