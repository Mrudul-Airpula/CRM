import "./style/signstyle.css"
import logo from "./logo.png"
import { MdWavingHand } from "react-icons/md";
export default function Signup() {
    return <>
        <div className="signup_outer">
            <div className="signup_outer_inner">
                <div className="signup_outer_inner_row1">
                    <img src={logo}></img>
                    <h2>Logo</h2>
                </div>
                <div className="signup_outer_inner_row2">
                    <h2>Welcome!</h2>
                    <MdWavingHand className="Handicon" />
                </div>
                <div className="signup_outer_inner_row3">
                    <label>Signup your account</label>
                </div>
                <div className="signup_outer_inner_row4">
                    <div className="signup_outer_inner_row4_left">
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className="signup_outer_inner_row4_right">
                        <input type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="signup_outer_inner_row5">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="signup_outer_inner_row6">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="signup_outer_inner_row7">
                    <input type="password" placeholder="Re-Password" />
                </div>
                <div className="signup_outer_inner_row8">
                    <div className="Checkboxicon">
                        <input type="checkbox" />
                    </div>
                    <div className="signup_outer_inner_row8_text">
                        <label>By clicking on Register, you are agreeing to our <span>Terms and Conditions</span> of Use.</label>
                    </div>
                </div>
                <div className="signup_outer_inner_row9">
                    <button>REGISTER</button>
                </div>
            </div>
        </div>
    </>
}