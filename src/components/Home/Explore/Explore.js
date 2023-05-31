import working from '../../../assets/working.png';

const Explore = () => {
  return (
    <section id="explore" class="container my-3 my-lg-5">
      <div class="row featurette g-0 rounded-3">
        <div class="col-md-4 bg-white rounded-start-3">
          <img class="d-block img-fluid w-auto" src={working} alt="" />
        </div>
        <div class="col-md-8 bg-info px-4 bg-dark rounded-end-5 ">
          <div class="">
            <h2 class=" fw-bolder featurette-heading fw-normal pt-2 pt-lg-5 display-5 text-white">Explore The learning  Institute</h2>
            <p class="text-white">Take one of our courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps</p>
          </div>
          <div class=" text-center d-flex flex-wrap justify-content-evenly g-3">
            <div class="mx-1">
              <h2 class=" lead fw-bolder featurette-heading fw-normal pt-lg-5 pb-1 text-white">3.2k+</h2>
              <p class="text-muted">Online course</p>
            </div>
            <div class="mx-1">
              <h2 class=" lead text-white fw-bolder featurette-heading fw-normal pt-lg-5 pb-1">600+</h2>
              <p class="text-muted">Expert member</p>
            </div>
            <div class="mx-1">
              <h2 class=" lead text-white fw-bolder featurette-heading fw-normal pt-lg-5 pb-1">1k+</h2>
              <p class="text-muted">Rating & Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;