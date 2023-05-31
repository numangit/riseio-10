import Lottie from "lottie-react";
import learn2 from "../../../assets/111489-teach.json"

const Instructors = () => {
  return (
    <div className="d-block align-items-center pb-3 d-lg-flex flex-lg-row-reverse my-3">
      <div className='w-100 my-md-3'><Lottie animationData={learn2} loop={true} /></div>
      <div className="mx-auto p-3 p-md-4 mt-lg-5 text-white">
        <h1 className='display-5 fw-semibold m-0'>Our Instructors</h1>
        <hr />
        <p className='fs-4 mt-3 mt-sm-4'>We have world-class instructors from around the world with great experience and qualifications. We are dedicated to create qualified education professionals across the world.</p>
      </div>
    </div>
  );
};

export default Instructors;