import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { BsFillGiftFill, BsFillClockFill } from 'react-icons/bs';

const Services = () => {
  return (
    <div class="container px-4 py-3 pt-lg-5 my-3 text-white" id="icon-grid">
      <h1 class="fw-semibold display-6 my-lg-3 text-white text-center">Services We Offer</h1>
      <p class="my-1 text-white text-center fs-5">
        Over the past 10 years, we have been improving our services
        <br />
        and here are our services.
      </p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-2">
            <p className='fs-1 my-4'><FaChalkboardTeacher /></p>
            <h3 class="mb-2 fw-bold mb-0 fs-4 text-body-emphasis">Online Teaching</h3>
            <p>You can learn from anywhere in the world. We teach our students.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-2">
            <p className='fs-1 my-4'><BsFillGiftFill /></p>
            <h3 class="mb-2 fw-bold mb-0 fs-4 text-body-emphasis">Rewards</h3>
            <p>Students will be rewarded for their performances in the course.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-2">
            <p className='fs-1 my-4'><BsFillClockFill /></p>
            <h3 class="mb-2 fw-bold mb-0 fs-4 text-body-emphasis">Lifetime Access</h3>
            <p>Students will have the access to the course contents for life time.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-2">
            <p className='fs-1 my-4'><FaUserGraduate /></p>
            <h3 class="mb-2 fw-bold mb-0 fs-4 text-body-emphasis">Certificate</h3>
            <p>Best students will be rewarded a certificate of excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;