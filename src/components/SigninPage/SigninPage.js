import React, { useContext } from 'react';
import './SigninPage.css';
import logo from '../TopNavigateBar/icons8-dove-50.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const SigninPage = () => {
    const [authError, setAuthError] = useState('');
    const { setUser, loginUser, googleSignin, githubSignin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    //submit handler function
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setLoading(false);
                e.target.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            });
    }

    // google sign in handler function
    const handleGoogleSignin = () => {
        googleSignin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            });
    }

    // github sign in handler function
    const handleGithubSignin = () => {
        githubSignin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
            });
    }

    return (
        <div className="mt-5 pt-5">
            <main className="col-10 col-lg-4 my-5 mx-auto bg-glass-dark text-white p-4 rounded-4">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="mb-2 fw-normal">Sign in</h1>
                    <p className="text-muted mb-3 fs-6 ">Welcome back!</p>
                    <div className="form-floating text-dark fs-6">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-3">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="my-3 w-100 d-flex">
                        <label className=''>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        <p className='ms-auto my-0 text-end text-muted' >Forgot Password</p>
                    </div>
                    <p className="text-danger fs-6 fw-semibold">{authError}</p>
                    <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
                    <hr className='my-4' />
                </form>
                <p className='px-3 my-0 text-sm dark:text-gray-400'>Sign in with social accounts</p>
                <div className='p-3 fs-5'>
                    <span onClick={handleGoogleSignin} className='p-3 rounded-sm'> <FaGoogle /></span>
                    <span onClick={handleGithubSignin} className='p-3 rounded-sm'> <FaGithub /></span>
                </div>
                <p className='text-center text-muted'>
                    Don't have an account yet ?{' '}
                    <Link to='/SignupPage' className=''>
                        Sign up
                    </Link>
                    .
                </p>
                <p className="mt-2 mb-3 text-muted">Copyright © 2017–2022 Rise.io</p>
            </main>
        </div >
    );
};

export default SigninPage;