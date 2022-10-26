import React from "react";
import "./Summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Summary({ user1 , user2, user3, user4, name1 }) {

    return (
        <>
            <div className="summary">
                <div className="summary_row1">
                    <label>SalesPersonwise Success Rate</label>
                    <BsThreeDotsVertical className="icon" />
                </div>
                <div className="summary_row">
                    <div className="summary_single">
                        <label className="summary_value">{user1}</label>
                        <label className="summary_single_title"> {name1}</label>
                    </div>
                    <div className="summary_single">
                        <label className="summary_value">{user2}</label>
                        <label className="summary_single_title">SalesPerson Two</label>
                    </div>
                    <div className="summary_single">
                        <label className="summary_value">{user3}</label>
                        <label className="summary_single_title">SalesPerson Three</label>
                    </div>
                </div>
                <div className="summary_row">
                    <div className="summary_single">
                        <label className="summary_value">{user4}</label>
                        <label className="summary_single_title">SalesPerson Four</label>
                    </div>
                    {/* <div className="summary_single">
                        <label>{user5}</label>
                        <label className="summary_value">SalesPerson Five</label>
                    </div> */}
                    {/* <div className="summary_single">
                        <label>2</label>
                        <label className="summary_value">SalesPerson Five</label>
                    </div> */}
                </div>
            </div>
        </>
    );
}