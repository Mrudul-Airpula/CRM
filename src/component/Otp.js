import './otp.css';
export default function otp() {
    return <>
        <div className="Outer">
            <div className="Inner">
                <div className="Inner_row1">
                    <h2>Verify OTP!</h2>
                </div>
                <div className='Inner_row2'>
                    <input type={"text"} placeholder="OTP" />
                </div>
                <div className='Inner_row3'>
                    <button>RESEND</button>
                    <button>VERIFY</button>
                </div>
            </div>
        </div>
    </>
}