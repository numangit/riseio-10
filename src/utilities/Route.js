import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import Home from '../components/Home/Home';
import Courses from '../components/Courses/Courses';
import Blog from '../components/Blog/Blog';

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
            { path: 'Courses', element: <Courses></Courses> },
            { path: 'blog', element: <Blog></Blog> },
        ])
    }

])