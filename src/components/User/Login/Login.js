import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signIngoogle} = useAuth()
    return (
        <div>
            <div className="container">
                <div className="login_area">
                    <div className="login_form">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn_custom">Login</button>
                            </div>
                        </form>
                        <div className="login_others">
                            <button onClick={signIngoogle}>Login With Google</button>
                            <p className="mt-3">Create a New <NavLink to="/register">Register</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;