import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../TopNavigateBar/icons8-dove-50.png';

const SignupPage = () => {
    return (
        <div className="mt-5 pt-5">
            <main className="col-10 col-lg-4 my-5 mx-auto bg-dark text-white p-4 rounded-4">
                <form>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Join Us</h1>
                    <div className="form-floating text-dark fs-6">
                        <input type="email" name="fullName" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">

                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <hr className='my-4' />
                    <p className='px-3 my-0 text-sm dark:text-gray-400'>Sign up with social accounts</p>
                    <div className='p-3 fs-5'>
                        <span className='p-3 rounded-sm'> <FaGoogle /></span>
                        <span className='p-3 rounded-sm'> <FaGithub /></span>
                    </div>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link to='/signin' className=''>
                            Sign in
                        </Link>
                        .
                    </p>
                    <p className="mt-2 mb-3 text-muted">© 2017–2022</p>
                </form>
            </main>
        </div>
    );
};

export default SignupPage;