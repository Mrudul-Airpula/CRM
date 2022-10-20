
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import './SummaryCount.css';
export default function SummaryCount() {
    const [pcount, setPcount] = useState("");
    useEffect(() => {
        const url = "http://localhost:3000/dev/prospectGrowth";
        const data = {};
        const Header = {};
        axios.post(url, data, { Headers: Header })
            .then((res) => {
                setPcount(JSON.stringify(res.data[0].count))
                console.log("Response ==> " + JSON.stringify(res.data[0].count))
                
            })
            .catch((err) => {
                console.log("Error ==> " + err)
            })
    })

    return (
        <>
            <div className="summarycount_outer">
                <div className="summarycount_inner">
                    <div className="summarycount_inner_row1">
                        <label className="summarycount_label">Prospect Growth</label>
                    </div>
                    <div className="summarycount_inner_row2">
                        <label className="summarycount_value">#{pcount} </label>
                    </div>
                </div>
            </div>
        </>
    );

}