import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthoContext } from '../../context/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthoContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch(error => console.error(error))
    }
    return (
        <div className="hero w-full">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 my-20">
                    <form onSubmit={handleLogin} className="card-body p-20">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary font-bold">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-5'>Don't have an Account <Link className='text-blue-600 font-bold' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;