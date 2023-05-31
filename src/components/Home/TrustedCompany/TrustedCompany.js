import company1 from '../../../assets/company-1.png';
import company2 from '../../../assets/company-2.png';
import company3 from '../../../assets/company-3.png';
import company4 from '../../../assets/company-4.png';
import company5 from '../../../assets/company-5.png';
import company6 from '../../../assets/company-6.png';

const TrustedCompany = () => {
  return (
    <section class="container d-none d-lg-block text-center d-block justify-content-center my-5 text-white">
      <h2 class="fw-semibold">Trusted by over 800+ companies</h2>
      <div class="company-img">
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