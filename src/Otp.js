import './Otp.css';
import { useState } from 'react';

export default function Otp() {
    const [otp, setOtp] = useState("");
    return <>
        <div className="otp_outer">
            <div className="otp_inner">
                <div className="otp_inner_row1">
                    <h2>Verify OTP!</h2>
                </div>
                <div className='otp_inner_row2'>
                    <input type="text" placeholder="OTP" onChange={(e) => { setOtp(e.target.value) }} />
                    <label>{otp}</label>
                </div>
                <div className='otp_inner_row3'>
                    <button>RESEND</button>
                    <button>VERIFY</button>
                </div>
            </div>
        </div>
    </>
}