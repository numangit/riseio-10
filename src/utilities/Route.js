import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Home from '../components/Home/Home';
import Courses from '../components/Courses/Courses';
import Blog from '../components/Blog/Blog';
import Faq from '../components/FAQ/Faq';
import SigninPage from "../components/SigninPage/SigninPage";
import SignupPage from "../components/SignupPage/SignupPage";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Checkout from "../components/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

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
            // { path: 'home', element: <Home></Home> },
            {
                path: 'courses',
                loader: () => fetch('https://rise-server-assignment10.vercel.app/all-courses'),
                element: <Courses></Courses>
            },
            { path: 'faq', element: <Faq></Faq> },
            { path: 'blogs', element: <Blog></Blog> },
            { path: 'SigninPage', element: <SigninPage></SigninPage> },
            { path: 'SignupPage', element: <SignupPage></SignupPage> },
            {
                path: 'CourseDetails/:id',
                loader: async ({ params }) => {
                    return fetch(`https://rise-server-assignment10.vercel.app/coursedetails/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: 'Checkout/:id',
                loader: async ({ params }) => {
                    return fetch(`https://rise-server-assignment10.vercel.app/coursedetails/${params.id}`)
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
        ])
    }

])