import student1 from '../../../assets/student-1.png';
import student2 from '../../../assets/student-2.png';
import student3 from '../../../assets/student-3.png';
import student4 from '../../../assets/student-4.png';

const Success = () => {
  return (
    <section id="success" class="container text-sm-start py-3 my-lg-3 ">
      <h1 class="fw-semibold display-6 my-lg-3 text-white text-center">Meet Our Successful Students</h1>
      <p class="my-1 text-white text-center fs-5">Over the past 10 years, we had many successful students
        <br />and here are some of ur top brilliant students.
      </p>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-2 my-lg-4">
        <div class="col">
          <div class="card bg-dark text-white">
            <img src={student1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Awlad Hossaine</h5>
              <small class="card-text">UI/UX Designer</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark text-white">
            <img src={student2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Jannatul Islam</h5>
              <small class="card-text">Motion Design</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark text-white">
            <img src={student3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Nathan Dao</h5>
              <small class="card-text">Web Developer</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-dark text-white">
            <img src={student4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title fw-bold">Nishi Akhter</h5>
              <small class="card-text">React Developer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;