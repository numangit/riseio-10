import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className="mt-5 pt-5">
            <h1>This is Courses</h1>
            {
                allCourses.map(course => <CourseCard key={course.course_id} props={course}></CourseCard>)
            }
        </div>
    );
};

export default Courses;