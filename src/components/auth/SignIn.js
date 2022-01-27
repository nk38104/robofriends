import React, { useState } from 'react';


const SignIn = ({ onRouteChange }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const onSubmitSignIn = () => {
        onRouteChange("home");
    };

    return (
    <div className="signin">
        <form className="signin-form">
            <h1>Sign In</h1>
            <label htmlFor="email">Email</label>
            <input onChange={(event) => setEmail(event.target.value)} name="email" type="email" placeholder="Enter your email..." value={email} />
            <label htmlFor="password">Password</label>
            <input onChange={(event) => setPassword(event.target.value)} name="password" type="password" placeholder="Enter your password..." value={password} />
            <button type="submit" className="signin-btn" onClick={() => onSubmitSignIn()}>Submit</button>
        </form>
    </div>
    );
}

export default SignIn;
