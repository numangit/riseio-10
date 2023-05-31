import Header from './Header/Header';
import Instructors from './Instructors/Instructors';
import OurApp from './OurApp/OurApp';

const Home = () => {
    return (
        <div className="my-5 py-5">
            <Header></Header>
            <Instructors></Instructors>
            <OurApp></OurApp>
        </div>
    );
};

export default Home;