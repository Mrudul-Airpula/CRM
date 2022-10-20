import "./Login.css";
import logo from "./images/logo.png"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
export default function Login() {
    const Navigate = useNavigate();
    const loginclick = (e) => {
        // alert("HI!")
        const url = "http://localhost:3000/dev/login";
        const data = { email: email, password: password };
        const header = {}
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                if (res.data === "Login details incorrect!")
                    alert("Login details incorrect!")
                else if (res.data === "Both the fields are mandatory") {
                    alert("Both the fields are mandatory")
                }
                else
                    Navigate("/AdminDash")
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    }
    function signup() {
        Navigate("/signup");
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
                    </div>
                    <div className="Login_outer_row1_inner_row5">
                        <input type="Password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="Login_outer_row1_inner_row6">
                        <input type="checkbox" />
                        <label>Remember me</label>
                        <div className="Login_outer_row1_inner_row6_text">
                            <label>Forgot Password?</label>
                        </div>
                    </div>
                    <div className="Login_outer_row1_inner_row7">
                        <label onClick={(e) => { loginclick(e) }}>LOGIN</label>
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