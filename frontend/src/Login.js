import "./Login.css";
import logo from "./images/logo.png"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Admin from "./Admin";
export default function Login() {
    const navigate = useNavigate();
    function login() {
        navigate("/Admin")
    }
    function signup() {
        navigate("/signup");
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (<>
        <div className="Login_outer">
            <div className="Login_outer_row1">
                <div className="Login_outer_row1_inner">
                    <div className="Login_outer_row1_inner_row1">
                        <img src={logo}></img>
                        <label>Logo</label>
                    </div>
                    <div className="Login_outer_row1_inner_row2">
                        <label>Welcome!</label>
                    </div>
                    <div className="Login_outer_row1_inner_row3">
                        <label>Please sign-in to your account</label>
                    </div>
                    <div className="Login_outer_row1_inner_row4">
                        <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        <label> {email} </label>
                    </div>
                    <div className="Login_outer_row1_inner_row5">
                        <input type="Password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        <label>{password}</label>
                    </div>
                    <div className="Login_outer_row1_inner_row6">
                        <input type="checkbox" />
                        <label>Remember me</label>
                        <div className="Login_outer_row1_inner_row6_text">
                            <label>Forgot Password?</label>
                        </div>
                    </div>
                    <div className="Login_outer_row1_inner_row7">
                        <label onClick={login}>LOGIN</label>
                    </div>
                </div>
            </div>
            <div className="Login_outer_row2">
                <label> New Member? <span onClick={signup}> | Sign up.</span>
                </label>
            </div>
        </div>
    </>


    );
}