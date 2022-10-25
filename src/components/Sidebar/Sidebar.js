import React from 'react';

const Sidebar = (props) => {
    // console.log(props.props);
    const allCourses = props.props;
    return (
        <div>
            <h1>this is sidebar</h1>
            {
                allCourses.map(course => <p>{course.title}</p>)
            }

        </div>
    );
};

export default Sidebar;