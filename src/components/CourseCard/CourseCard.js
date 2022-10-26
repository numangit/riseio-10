import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    // console.log(props.props);
    const { picture, title, course_id, description, Instructor } = props.props;
    return (
        <div>
            <div className="d-flex my-2 my-lg-4 col-11 col-lg-9 col-10 mx-auto  bg-dark text-white text-white p-2 rounded-3">
                <img className="w-25 m-2 rounded" src={picture} alt="Card image" />
                <div className='mx-auto'>
                    <p className="fs-3 my-1 py-0 fw-bold">{title}</p>
                    <p className="d-none d-sm-block my-1 py-0">{description}</p>
                    <p className=" my-2 py-0 " ><small><span className="fw-semibold text-muted">By </span><span className="fw-semibold text-muted">{Instructor}</span></small></p>
                    <Link className="my-2 py-0"
                        to={`../CourseDetails/${course_id}`}>
                        <button className="btn btn-primary btn-sm fw-bolder">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;