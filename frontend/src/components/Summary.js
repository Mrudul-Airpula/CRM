import React, { useEffect } from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
export default function Summary() {
    const [genman, setGenMan] = useState(18);
    const [areaman, setAreaMan ] = useState(12);
    const [assisman, setAssisMan] = useState(32);
    const [salesman, setSalesMan] = useState(32);
    useEffect(()=>{
        const url = "http://localhost:3000/dev/ManagerwiseProspectCount";
        const data = {};
        const header = {};
        axios.post(url, data, {Headers:header})
        .then((res)=>{
            console.log("Response => " + JSON.stringify(res.data))
        })
        .catch((err)=>{
            console.log("Error => "+ err)
        })
    })
    return (
        <>
            <div className="summary">
                <div className="summary_row1">
                    <label>Manager wise Prospect Count</label>
                    <BsThreeDotsVertical className="icon" />{" "}
                </div>
                <div className="summary_row">
                    <div className="summary_single">
                        <label> General Manager</label>
                        <label className="summary_value">{genman}</label>
                    </div>
                    <div className="summary_single">
                        <label>Area Manager</label>
                        <label className="summary_value">{areaman}</label>
                    </div>
                    <div className="summary_single">
                        <label>Assistant Manager</label>
                        <label className="summary_value">{assisman}</label>
                    </div>
                </div> 
                <div className="summary_row">
                    <div className="summary_single">
                        <label>Sales Manager</label>
                        <label className="summary_value">{salesman}</label>
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