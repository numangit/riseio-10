import React from 'react';
import './Sidebar.css';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    // console.log(props.props);
    const allCourses = props.props;
    return (
        <div className="bg-glass pt-5 px-5 sticky-top full-vh">
            <h2 className="text-light mt-5 text-start"><FiMenu className="fs-5" /> Courses</h2>
            <hr className="text-light" />
            {
                allCourses.map(course => <Link key={course.course_id} className="side-option" to={`../CourseDetails/${course.course_id}`}><p className="text-white text-start  fs-5"><small>{course.title}</small></p></Link>)
            }

        </div>
    );
};

export default Sidebar;