import Header from './Header/Header';
import Instructors from './Instructors/Instructors';
import OurApp from './OurApp/OurApp';
import Services from './Services/Services';
import Success from './Success/Success';
import TrustedCompany from './TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div className="my-5 py-5 container">
            <Header></Header>
            <Services></Services>
            <Instructors></Instructors>
            <OurApp></OurApp>
            <Success></Success>
            <TrustedCompany></TrustedCompany>
        </div>
    );
};

export default Home;