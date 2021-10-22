import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessaggeBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search? props.location.search.split('=')[1]: '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Password and confirm password are not match');
        } else {
            dispatch(register(name, email, password));
        }        
    };
    useEffect(() =>{
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div className="main">
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessaggeBox variant="danger">{error}</MessaggeBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        className="signin"
                        type="text" 
                        id="name" 
                        placeholder="Enter name" 
                        required
                        onChange={e => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input 
                        className="signin"
                        type="email" 
                        id="email" 
                        placeholder="Enter email" 
                        required
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        className="signin"
                        type="password" 
                        id="password" 
                        placeholder="Enter password" 
                        required
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        className="signin"
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Enter confirm password" 
                        required
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button className="primary"type="submit">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account? {' '} <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}