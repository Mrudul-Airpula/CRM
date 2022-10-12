import React, { useState } from "react";
import "./Modal.css";
export default function Page() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <>
            <Modal show={show} handleClick={handleClick} />
            <div className="page">
                Modal Sample
                <button onClick={handleClick}>Click Here!</button>
            </div>
        </>
    );
}

function Modal({ show, handleClick }) {
    return show ? (
        <div className="modalcontainer">
            <div className="modal">
                <p>Modal Message</p>
                <button onClick={handleClick}>Close</button>
            </div>
        </div>
    ) : (
        <></>
    );
}
