import "./Bargraph.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Bargraph({ blueh, greenh, orangeh, bluec }) {

    return <>
        <div className="bargraph1_top">
            <div className="bargraph1_title">
                <div >
                    <label >Campaign wise Prospect Count </label>
                    <BsThreeDotsVertical className="icon" />
                </div>
            </div>
            <div className="bargraph1_graph">
                <ul>
                    <li>
                        <label className="bargraph1_blue_value">{blueh}</label>
                        <div className="bargraph1_bluegraph" style={{ height: `${blueh}vh` }}></div>
                        <label className="bargraph1_blue_name">{bluec}</label>
                    </li>
                    <li>
                        <label className="bargraph1_green_value">{greenh}</label>
                        <div className="bargraph1_greengraph" style={{ height: `${greenh}vh` }} ></div>
                        <label className="bargraph1_green_name">Cam 2</label>
                    </li>
                    <li>
                        <label className="bargraph1_orange_value">{orangeh}</label>
                        <div className="bargraph1_orangegraph" style={{ height: `${orangeh}%` }}></div>
                        <label className="bargraph1_orange_name">Cam 3</label>
                    </li>
                </ul>
            </div>
        </div>
    </>
}
