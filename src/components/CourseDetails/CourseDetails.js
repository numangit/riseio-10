import React from 'react';
// import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { MdOutlineTopic, MdOutlinePriceChange } from "react-icons/md";
import { FaChalkboardTeacher, FaCrown } from "react-icons/fa";

const CourseDetails = () => {
    // const details = useLoaderData();
    // console.log(details);

    // const [course, setCourse] = useState();
    // useEffect(() => {
    //     fetch('http://localhost:5000/coursedetails/1')
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    // }, [])
    // console.log(course);

    return (
        <div className="mt-5 pt-5 ">
            <div >
                <div>
                    <div className="d-flex my-2 my-lg-2 col-11 col-lg-9 col-10 mx-auto  bg-dark text-white p-2 rounded-3">
                        <img className="w-25 m-2 rounded" src="https://img.freepik.com/free-vector/data-inform-illustration-concept_114360-864.jpg?w=2000" alt="Card image" />
                        <div className='mx-auto p-4'>
                            <div className="d-lg-flex">
                                <span className="fs-4 py-0 fw-bold me-auto">Topic name here</span>
                                <span className='ms-auto pt-3 pt-lg-0'><button className="btn btn-sm btn-outline-light fw-semibold">Download PDF <FiDownload /></button></span>
                            </div>
                            <hr className="d-none d-sm-block" />
                            <p className="d-none d-sm-block py-0 text-start">Description :</p>
                            <p className="d-none d-sm-block  py-0 text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, accusantium?dfhgdikfufjwf efhewfhioewfh ewfohjwefoihewfiuew fewofhweofh</p>
                        </div>
                    </div>
                </div>
                <div className="bg-dark text-white my-2 my-lg-3 col-11 col-lg-9 col-10 mx-auto  bg-dark p-2 rounded-3 d-lg-flex">
                    <div className="text-start col-11 col-lg-7 p-4">
                        <p className="text-center fs-4 fw-semibold">Skills</p>
                        <hr className="text-Mutred" />
                        <span className='d-flex'><BsCheckLg className="mt-1 fs-5" />
                            <p className="ms-1 p-0"> Have a great intuition of many Machine Learning models Make accurate predictions</p>
                        </span>
                        <span className='d-flex'><BsCheckLg className="mt-1 fs-5" />
                            <p className="ms-1 p-0"> Have a great intuition of many Machine Learning models Make accurate predictions</p>
                        </span>
                        <span className='d-flex'><BsCheckLg className="mt-1 fs-5" />
                            <p className="ms-1 p-0"> Have a great intuition of many Machine Learning models Make accurate predictions</p>
                        </span>
                    </div>
                    <div className="vr d-none d-lg-block col-lg-1 mx-auto"></div>
                    <div className="text-start col-11 col-lg-4 p-4">
                        <p className="text-center fs-4 fw-semibold">Details</p>
                        <hr />
                        <p><small className="text-muted"><MdOutlineTopic /> Topic : </small>Machine Learning</p>
                        <p><small className="text-muted"><FaChalkboardTeacher /> Instructor : </small>Mars Toe</p>
                        <p><small className="text-muted"><BiTime /> Duration :</small> 10 <small className="text-muted">hrs</small></p>
                        <p><small className="text-muted"><MdOutlinePriceChange /> Price :</small> $ 99</p>
                        <span className='mx-auto mt-2'><button className="btn w-100 btn-outline-warning fw-semibold">Get Premium Access  <FaCrown /></button></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;