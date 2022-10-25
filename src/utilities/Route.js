import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Home from '../components/Home/Home';
import Courses from '../components/Courses/Courses';
import Blog from '../components/Blog/Blog';
import Faq from '../components/FAQ/Faq';
import SigninPage from "../components/SigninPage/SigninPage";
import SignupPage from "../components/SignupPage/SignupPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
            },
            { path: 'home', element: <Home></Home> },
            { path: 'courses', element: <Courses></Courses> },
            { path: 'faq', element: <Faq></Faq> },
            { path: 'blogs', element: <Blog></Blog> },
            { path: 'signin', element: <SigninPage></SigninPage> },
            { path: 'signup', element: <SignupPage></SignupPage> },
        ])
    }

])