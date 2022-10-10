import "./Signup.css"
import logo from "./images/signup_logo.png"
import { MdWavingHand } from "react-icons/md";
import React from "react";
import { useState } from "react";

export default function Signup({ setshow }) {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    return (<>
        <div className="signup_outer">
            <div className="signup_inner">
                <div className="signup_inner_row1">
                    <img src={logo}></img>
                    <h2>Logo</h2>
                </div>
                <div className="signup_inner_row2">
                    <h2>Welcome!</h2>
                    <MdWavingHand className="signup_inner_row2_handicon" />
                </div>
                <div className="signup_inner_row3">
                    <label>Signup your account</label>
                </div>
                <div className="signup_inner_row4">
                    <div className="signup_inner_row4_left">
                        <input type="text" placeholder="First Name" onChange={(e) => { setFirstname(e.target.value) }} />
                    </div>
                    <div className="signup_inner_row4_right">
                        <input type="text" placeholder="Last Name" onChange={(e) => { setLastname(e.target.value) }} />
                    </div>
                </div>
                <div className="signup_inner_row5">
                    <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="signup_inner_row6">
                    <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="signup_inner_row7">
                    <input type="password" placeholder="Re-Password" onChange={(e) => { setRepassword(e.target.value) }} />
                </div>
                <div className="signup_inner_row8">
                    <div className="signup_inner_row8_checkboxicon">
                        <input type="checkbox" />
                    </div>
                    <div className="signup_inner_row8_text">
                        <label>By clicking on Register, you are agreeing to our <span>Terms and Conditions</span> of Use.</label>
                    </div>
                </div>
                <div className="signup_inner_row9">
                    <button onClick={(e) => { setshow(true) }}> REGISTER</button>
                </div>
            </div>
        </div>
    </>);
}
