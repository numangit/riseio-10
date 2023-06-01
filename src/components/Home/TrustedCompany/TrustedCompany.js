import company1 from '../../../assets/company-1.png';
import company2 from '../../../assets/company-2.png';
import company3 from '../../../assets/company-3.png';
import company4 from '../../../assets/company-4.png';
import company5 from '../../../assets/company-5.png';
import company6 from '../../../assets/company-6.png';

const TrustedCompany = () => {
  return (
    <section class="container d-none d-lg-block text-center d-block justify-content-center pt-lg-3 my-3 text-white">
      <h2 class="display-6 fw-semibold mb-3">Our Partners</h2>
      <p class="my-1 text-white text-center">Our sponsors and partners have always been amazing
        <br />and here are our partners.
      </p>
      <div class=" py-2 rounded-2 mt-4">
        <img class="mx-3 my-2" src={company1} alt="" />
        <img class="mx-3 my-2" src={company2} alt="" />
        <img class="mx-3 my-2" src={company3} alt="" />
        <img class="mx-3 my-2" src={company4} alt="" />
        <img class="mx-3 my-2" src={company5} alt="" />
        <img class="mx-3 my-2" src={company6} alt="" />
      </div>

    </section>
  );
};

export default TrustedCompany;