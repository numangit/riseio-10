import Explore from './Explore/Explore';
import Header from './Header/Header';
import Instructors from './Instructors/Instructors';
import JoinUs from './JoinUs/JoinUs';
import OurApp from './OurApp/OurApp';
import PopularCourse from './PopularCourse/PopularCourse/PopularCourse';
import Services from './Services/Services';
import Success from './Success/Success';
import TrustedCompany from './TrustedCompany/TrustedCompany';

const Home = () => {
    return (
        <div className="my-5 py-5 container">
            <Header></Header>
            <Services></Services>
            <Instructors></Instructors>
            <JoinUs></JoinUs>
            <PopularCourse></PopularCourse>
            <OurApp></OurApp>
            <Success></Success>
            <Explore></Explore>
            <TrustedCompany></TrustedCompany>
        </div>
    );
};

export default Home;