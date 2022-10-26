import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className="mt-lg-5 pt-lg-3 d-lg-flex">
            <div className="col-12 col-lg-3">
                <Sidebar props={allCourses}></Sidebar>
            </div>
            <div className="col-12 col-lg-9">
                {
                    allCourses.map(course => <CourseCard key={course.course_id} props={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;