import React from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Summary({ genc, salesc, areac, assisc }) {

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
                        <label className="summary_value">{genc}</label>
                    </div>
                    <div className="summary_single">
                        <label>Area Manager</label>
                        <label className="summary_value">{areac}</label>
                    </div>
                    <div className="summary_single">
                        <label>Assistant Manager</label>
                        <label className="summary_value">{assisc}</label>
                    </div>
                </div>
                <div className="summary_row">
                    <div className="summary_single">
                        <label>Sales Manager</label>
                        <label className="summary_value">{salesc}</label>
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