import React, { useState } from 'react';
import styles from '../AuthForm.module.css';


const Register = ({ onRouteChange }) => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repeatedPassword, setRepeatedPassword ] = useState("");

    const onSubmitRegister = () => {
        onRouteChange("signin");
    };

    return (
    <div className={styles.formContainer}>
        <form className={styles.form}>
            <h1 className={styles.h1}>REGISTER</h1>
            
            <label className={styles.label} htmlFor="username">Username</label>
            <input className={styles.input} name="username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username..." value={username} />

            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." value={email} />
            
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." value={password} />
            
            <label className={styles.label} htmlFor="repeated">Repeat Password</label>
            <input className={styles.input} name="repeated" type="password" onChange={(e) => setRepeatedPassword(e.target.value)} placeholder="Repeat your password..." value={repeatedPassword} />
            
            <button type="submit" className={styles.button} onClick={() => onSubmitRegister()}>REGISTER</button>
        </form>
    </div>
    );
}

export default Register;
