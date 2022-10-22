import React from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Summary() {
    // localStorage.getItem("salescount")
    // localStorage.getItem("assiscount")
    // localStorage.getItem("areacount")
    // localStorage.getItem("gencount")

    return (
        <>
            <div className="summary">
                <div className="summary_row1">
                    <label>Manager wise Prospect Count</label>
                    <BsThreeDotsVertical className="icon" />
                </div>
                <div className="summary_row">
                    <div className="summary_single">
                        <label> General Manager</label>
                        <label className="summary_value">0</label>
                    </div>
                    <div className="summary_single">
                        <label>Area Manager</label>
                        <label className="summary_value">0</label>
                    </div>
                    <div className="summary_single">
                        <label>Assistant Manager</label>
                        <label className="summary_value">0</label>
                    </div>
                </div> 
                <div className="summary_row">
                    <div className="summary_single">
                        <label>Sales Manager</label>
                        <label className="summary_value">0</label>
                    </div>
                    {/* <div className="summary_single">
                        <label>Manager1</label>
                        <label className="summary_value"></label>
                    </div> */}
                    {/* <div className="summary_single">
                        <label>Manager1</label>
                        <label className="summary_value">11</label>
                    </div> */}
                </div>
            </div>
        </>
    );
}