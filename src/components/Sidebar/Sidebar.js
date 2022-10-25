import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    // console.log(props.props);
    const allCourses = props.props;
    return (
        <div className="bg-glass p-5 sticky-top full-vh">
            <h2 className="text-light mt-5">Catagories</h2>
            <hr className="text-light" />
            {
                allCourses.map(course => <p className="text-start"><small className="text-light">{course.title}</small></p>)
            }

        </div>
    );
};

export default Sidebar;