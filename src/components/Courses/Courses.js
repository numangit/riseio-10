import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className="mt-5 pt-4 d-flex">
            <div className="">
                <Sidebar props={allCourses}></Sidebar>
            </div>
            <div>
                <h1>This is Courses</h1>
                {
                    allCourses.map(course => <CourseCard key={course.course_id} props={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;