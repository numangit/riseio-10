import Header from './Header/Header';
import Instructors from './Instructors/Instructors';
import OurApp from './OurApp/OurApp';
import Success from './Success/Success';
import TrustedCompany from './TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div className="my-5 py-5">
            <Header></Header>
            <Instructors></Instructors>
            <Success></Success>
            <OurApp></OurApp>
            <TrustedCompany></TrustedCompany>
        </div>
    );
};

export default Home;