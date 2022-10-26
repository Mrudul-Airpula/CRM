import React from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Summary({ genc, areac, assisc, salesc }) {

    return (
        <>
            <div className="summary1_top">
                <div className="summary1_row1">
                    <label>Manager wise Prospect Count</label>
                    <BsThreeDotsVertical className="icon" />{" "}
                </div>
                <div className="summary1_row">
                    <div className="summary1_single_main">
                        <label className="summary1_value">{genc}</label>
                        <label className="summary1_single_title"> General Manager</label>
                    </div>
                    <div className="summary1_single_main">
                        <label className="summary1_value">{areac}</label>
                        <label className="summary1_single_title">Area Manager</label>
                    </div>
                    <div className="summary1_single_main">
                        <label className="summary1_value">{assisc}</label>
                        <label className="summary1_single_title">Assistant Manager</label>
                    </div>
                </div>
                <div className="summary1_row">
                    <div className="summary1_single_main">
                        <label className="summary1_value">{salesc}</label>
                        <label className="summary1_single_title">Sales Manager</label>
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