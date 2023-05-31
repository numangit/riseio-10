import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PopularCourse = () => {
  const [courses, setCourses] = useState();
  console.log(courses);

  useEffect(() => {
    fetch('https://rise-server-assignment10.vercel.app/all-courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <section id="courses" class="container text-center my-3 my-md-5 px-4 px-lg-0">
      <h2 class="display-6 fw-semibold mb-3 text-white">Discover Our Popular Courses</h2>
      <p class="text-white pt-2 pb-3">Looking to add new skills? Is there a hobby you've wanted to try?<br />
        We're <strong>eCourse</strong>, a leading destination for learning and teaching online.</p>
      <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-3">
        {
          courses?.slice(Math.max(courses?.length - 5, 4)).map(course => <div class="col">
            <div class="card flex-sm-row  bg-dark">
              <img className="col-12 col-lg-3 img-cover rounded-start-3" src={course?.picture} alt="" />

              <div class="card-body text-white text-start align-items-center pt-lg-3">
                <h5 class="card-title fw-bold ">{course?.title}</h5>
                <p class="card-text fw-light">{course?.description}</p>
                <h6 class="text-secondary fw-bold">By: {course?.Instructor}</h6>
              </div>
            </div>
          </div>)
        }
      </div>
      <Link to={'courses'} class="btn btn-dark text-white mt-3 mt-md-5 d-none d-lg-inline-flex">
        See More Courses
      </Link>
      <Link to={'courses'} class="btn btn-dark text-white mt-3 mt-md-5 d-lg-none ">View All</Link>
    </section>
  );
};

export default PopularCourse;