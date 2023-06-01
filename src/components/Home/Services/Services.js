import { FaChalkboardTeacher, FaHourglassStart } from 'react-icons/fa';
import { BsFillGiftFill } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';

const Services = () => {
  return (
    <div class="container px-4 py-3 my-3 pt-lg-5 my-md-5 text-white" id="icon-grid">
      <h1 class="fw-semibold display-6 my-lg-3 text-white text-center">Services We Offer</h1>
      <p class="my-1 text-white text-center fs-5">
        Over the past 10 years, we have been improving our services
        <br />
        and here are our services.
      </p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-3">
            <p className='text-muted display-3 mb-4 mt-2'><FaChalkboardTeacher /></p>
            <h3 class="mb-2  fw-bold mb-0 fs-4 text-body-emphasis">Online Teaching</h3>
            <p className="">You can learn from anywhere in the world. We teach our students.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-3">
            <p className='text-muted display-3 mb-4 mt-2'><BsFillGiftFill /></p>
            <h3 class="mb-2  fw-bold mb-0 fs-4 text-body-emphasis">Rewards</h3>
            <p className="">Students will be rewarded for their performances in the course.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-3">
            <p className='text-muted display-3 mb-4 mt-2'><FaHourglassStart /></p>
            <h3 class="mb-2  fw-bold mb-0 fs-4 text-body-emphasis">Lifetime Access</h3>
            <p className="">Students will have the access to the course contents for life time.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div class="bg-dark p-3 rounded-3">
            <p className='text-muted display-3 mb-4 mt-2'><GiGraduateCap /></p>
            <h3 class="mb-2  fw-bold mb-0 fs-4 text-body-emphasis">Certificate</h3>
            <p className="">Best students will be rewarded a certificate of excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;