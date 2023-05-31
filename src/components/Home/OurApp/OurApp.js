import React from 'react';
import { Link } from 'react-router-dom';
// import teacher1 from '../../../assets/profile-picture-1.jpg';
const OurApp = () => {
  return (
    <>
      <section id="register" class="container text-center pt-2 p-lg-5 px-4 px-lg-3 my-5 my-md-2">
        <div class="row bg-dark text-white p-3 p-lg-3 rounded ">
          <div class="col-lg-6 text-lg-start px-0 p-lg-3">
            <h2 class="fw-semibold">Ready to join?</h2>
            <p>The courses are designed to start you on a path towards your future career, no matter how little experience or technical knowledge you currently have. Join us to this today. </p>
          </div>
          <div class="col-lg-6 text-lg-end d-flex justify-content-center justify-content-lg-end align-items-lg-center px-0">
            <Link to={'SignupPage'} type="button" class="btn btn-warning text-black mt-1 mb-3 my-lg-5">
              <strong>Register Now</strong>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApp;