import img1 from '../../../assets/student-5.png';
import img2 from '../../../assets/student-6.png';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section class="container text-center my-2 my-md-5 py-lg-5">
      <h2 class="fw-bold text-white">Some Students Feedback</h2>
      <p class="text-white my-3 mb-lg-3">Below are the profiles of some of the people who have learned from our courses and got Successful</p>
      <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 my-2 my-lg-4">
        <div class="col">
          <div class="card bg-dark p-3 position-relative h-100">
            {/* <!-- badge  --> */}
            <span
              class="d-none d-lg-block position-absolute top-50 start-0 translate-middle badge rounded-circle bg-white bg-opacity-25 fs-4">
              + <span class="visually-hidden">unread messages
              </span>
            </span>

            {/* <!-- card details  --> */}
            <div class=" d-flex justify-content-between p-3">
              <img src={img2} alt="" />
              <span class="text-warning">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
              </span>
            </div>
            <div class="p-3 text-white">I enjoy my program because it’s exactly what I wanted to study and the mode of study is great. The study environment is great.</div>
            <div class="d-flex bg-transparent p-3">
              <img class="img-fluid" src="./images/student/student-6.png" alt="" />
              <div>
                <h5 class="card-title fw-bold px-3 text-white">Sarah Parsly</h5>
                <small class=" px-3 text-white">UI/UX Designer</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark p-3 position-relative h-100">
            {/* <!-- badge  --> */}
            <span class="d-none d-lg-block position-absolute top-50 start-100 translate-middle badge rounded-circle bg-white bg-opacity-75 fs-4 ">
              +
              <span class="visually-hidden">unread messages</span>
            </span>

            {/* <!-- card details  --> */}
            <div class="bg-transparent d-flex justify-content-between p-3">
              <img src={img1} alt="" />
              <span class="text-warning">
                <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar />
              </span>
            </div>
            <div class="p-3 text-white">
              The courses are really well updated and the professors are really good, but a few professors can get a little more interactive during the sessions. Overall amazing experience.
            </div>
            <div class="d-flex bg-transparent p-3">
              <img class="img-fluid" src="./images/student/student-5.png" alt="" />
              <div>
                <h5 class="card-title fw-bold px-3 text-white ">Andrew kin</h5>
                <small class=" px-3 text-white">web developer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-info text-white mt-3 mt-md-5 d-lg-none">View all</button>
    </section>
  );
};

export default Testimonial;