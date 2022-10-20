import "./Bargraph.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
export default function Bargraph() {
    const [bluecamp, setBlueCamp] = useState("");
    const [blueheight, setBlueHeight] = useState([]);
    const url = "http://localhost:3000/dev/campaignwiseprospectcount";
    const data = {};
    const header = {};
    axios.post(url, data, { Headers: header })
        .then((res) => {
            console.log("Response => " + JSON.stringify(res.data[0].count))
            setBlueHeight((res.data[0].count))
            setBlueCamp((res.data[0].txtCampaignName))
        })
        .catch((err) => {
            console.log("Error => " + err)
        })
    return <>
        <div className="bargraph">
            <div className="bargraph_title">
                <div >
                    <label >Campaign wise Prospect Count </label>
                    <BsThreeDotsVertical className="icon" />
                </div>
            </div>
            <div className="bargraph_graph">
                <ul>
                    <li>
                        <label className="bargraph_blue_value">{blueheight}</label>
                        <div className="bargraph_bluegraph" style={{ height: `${blueheight}%` }}></div>
                        <label className="bargraph_blue_name">{bluecamp}</label>
                    </li>
                    <li>
                        <label className="bargraph_green_value">7</label>
                        <div className="bargraph_greengraph" ></div>
                        <label className="bargraph_green_name">Cam 2</label>
                    </li>
                    <li>
                        <label className="bargraph_orange_value">10</label>
                        <div className="bargraph_orangegraph" ></div>
                        <label className="bargraph_orange_name">Cam 3</label>
                    </li>
                </ul>
            </div>
        </div>
    </>
}
