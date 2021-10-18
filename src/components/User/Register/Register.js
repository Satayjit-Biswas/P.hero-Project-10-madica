import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="container">
                <div className="register_area">
                    <div className="register_form">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn_custom">Register</button>
                            </div>
                        </form>
                        <div className="login_others">
                            <button>Register With Google</button>
                            <p className="mt-3">I have Already <NavLink to="/login">Account</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;