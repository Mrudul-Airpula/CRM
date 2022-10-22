import "./Bargraph.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Bargraph() {

    const blueheight = localStorage.getItem("blueheight")
    const bluename = localStorage.getItem("bluename")

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
                        <div className="bargraph_bluegraph" style={{ height: `${blueheight}vh` }}></div>
                        <label className="bargraph_blue_name">{bluename}</label>
                    </li>
                    {/* <li>
                        <label className="bargraph_green_value">{greenheight}</label>
                        <div className="bargraph_greengraph" style={{ height: `${greenheight}vh` }} ></div>
                        <label className="bargraph_green_name">Cam 2</label>
                    </li>
                    <li>
                        <label className="bargraph_orange_value">{orangeheight}</label>
                        <div className="bargraph_orangegraph" style={{ height: `${orangeheight}%` }}></div>
                        <label className="bargraph_orange_name">Cam 3</label>
                    </li> */}
                </ul>
            </div>
        </div>
    </>
}
