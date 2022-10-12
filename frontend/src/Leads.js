import "./Leads.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Leads(){
    return<>
        <div className="Leads">
            <div className="Leads_Colum1">
                <label>Leads Funnel</label>
                <BsThreeDotsVertical className="icon" />
            </div>
            <div className="Leads_Column2">
                <h2>$18100</h2>
                <h3>+5%</h3>
            </div>
            <div className="Leads_Column3">
                <ul>
                    <li>
                    <label>Leads</label>
                    <div className="Orange_Line"></div>
                    </li>
                    <li>
                    <label>Nurturing</label>
                    <div className="Green_Line"></div>
                    </li>
                    <li>
                    <label>Prospects</label>
                    <div className="Blue_Line"></div>
                    </li>
                </ul>
            </div>
        </div>
    </>
}