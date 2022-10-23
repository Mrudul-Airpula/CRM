import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Horizontalbar.css"


export default function Horizontalbar({ orange, green, blue }) {

    return (
        <>
            <div className="Horizontalbar_main">
                <div className="Horizontalbar_main_row1">
                    <label>Leads Funnel</label>
                    <div className="Horizontalbar_main_row1_icon">
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="Horizontalbar_main_row2">
                    <div className="Horizontalbar_main_row2_left">
                        <FaDollarSign />
                        <label><b>18500</b></label>
                    </div>
                    <div className="Horizontalbar_main_row2_right">
                        <label><span><b>+5%</b></span></label>
                    </div>
                </div>
                <div className="Horizontalbar_graph" >
                    <ul>
                        <li>
                            <label className="Horizontalbar_graph_orange_label">Leads</label>
                            <div className="Horizontalbar_graph_orange" style={{ width: `${orange}%` }} ></div>
                        </li>
                        <li>
                            <label>Nurturing</label>
                            <div className="Horizontalbar_graph_green" style={{ width: `${green}%` }} ></div>
                        </li>
                        <li>
                            <label>Prospects</label>
                            <div className="Horizontalbar_graph_blue" style={{ width: `${blue}%` }} ></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}