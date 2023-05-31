import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    // console.log(props.props);
    const { picture, title, course_id, description, Instructor } = props.props;
    return (
        <div>
            <div className="d-flex my-2 my-lg-4 col-11 col-lg-9 col-10 mx-auto  bg-dark text-white p-2 rounded-3">
                <img className="w-25 m-2 rounded" src={picture} alt="Card" />
                <div className='mx-auto p-0 p-lg-2'>
                    <p className="fs-4 my-1 py-0 fw-bold">{title}</p>
                    <hr className="d-none d-sm-block my-2" />
                    <p className="d-none d-sm-block my-1 py-0 text-start">{description}</p>
                    <div className="d-lg-flex">
                        <span className="d-none d-sm-block py-0 me-auto">
                            <p className="my-2 py-0 " ><small><span className="fw-semibold text-muted">By </span><span className="fw-semibold text-muted">{Instructor}</span></small></p>
                        </span>
                        <span className='ms-auto pt-3 pt-lg-0'>
                            <Link className="my-2 py-0"
                                to={`../CourseDetails/${course_id}`}>
                                <button className="btn btn-outline-warning btn-sm fw-bolder">Details</button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;