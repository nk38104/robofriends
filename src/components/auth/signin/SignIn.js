import React, { useState } from 'react';
import styles from '../AuthForm.module.css';


const SignIn = ({ onRouteChange }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const onSubmitSignIn = (route) => {
        onRouteChange(route);
    };

    return (
    <div className={styles.formContainer}>
        <form className={styles.form}>
            <h1 className={styles.h1}>Sign In</h1>
            
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." value={email} />
            
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." value={password} />
            
            <button type="submit" className={styles.button} onClick={() => onSubmitSignIn("home")}>ENTER</button>

            <div>
                <strong style={{fontSize: "1.2rem"}}>Are you new? <button className={styles.toRegisterButton} onClick={() => onSubmitSignIn("register")}>Join Us</button>  for FREE 🥰
                </strong>
            </div>
        </form>
    </div>
    );
}

export default SignIn;
