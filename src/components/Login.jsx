import { useState } from "react";

import google from "../assests/google.png";
import facebook from "../assests/facebook.png";
import minus from "../assests/minus.png";
import picture from "../assests/ui-picture.png";

export default function Login() {
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ error, setError ] = useState( "The email field is requied" );

    function verifyEmail() {
        const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if( email.length <= 0 ) {
            setError( "The email field is requied" );
        } else {
            if( !emailReg.test( email ) ) {
                setError( "Please enter a valid email" );
            } else {
                setError( "" );
            }
        }
    }
    return (
        <>
            <section className="login-page">
                <article className="login-card">
                    <div className="card-head"><img src="https://th.bing.com/th?id=OIP.Ku4iy6JfyZOZAKxOkfp0ewHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" alt="amazon" /></div>
                    <h1 className="login-title">Login</h1>
                    <div className="image-shown">
                        <img
                            src={picture}
                            alt="img-plc"
                        />
                    </div>
                    <div className="input-section">
                        <input
                            type="email"
                            name=""
                            id="email"
                            required={true}
                            placeholder="Email"
                            value={email}
                            onChange={( e ) => setEmail( e.target.value )}
                            onBlur={verifyEmail}
                        />
                        {error && <p className="error-message"><img src={minus} alt="error" className="error-icon" /><span>{error}</span></p>}
                        <input
                            type="password"
                            name=""
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={( e ) => setPassword( e.target.value )}
                        />
                        <button type="submit" className="button sign-in">Sign In</button>
                        <div className="user-options">
                            <p className="forgot-pass">Forgot Password?</p>
                            <p className="sign-up">New User? Sign Up</p>
                        </div>
                        <em className="or">or</em>
                        <button className="google button">
                            <p><img src={google} alt="google" className="icons" /></p><p> CONTINUE WITH GOOGLE</p></button>
                        <button className="facebook button"><img src={facebook} alt="facebook" className="icons" /><p> CONTINUE WITH FACEBOOK</p></button>
                    </div>
                </article>
            </section>
        </>
    );
}
