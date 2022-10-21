import "./AdminDash.css";
import Topbar from './components/Topbar';
import LeftBar from './components/LeftBar';
import Horizontalbar from './components/Horizontalbar';
import List from './components/List';
import Progressbar from './components/Progressbar';
import Bargraph from './components/Bargraph';
import Summary from './components/Summary';
import SummaryCount from "./components/SummaryCount";
import axios from "axios";
// import react from "react";
import { useEffect } from "react";

export default function AdminDash() {
    // const [pcount, setPcount] = useState("");
    useEffect(() => {
        const url = "http://localhost:3000/dev/prospectGrowth";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/prospectGrowth";
        const data = {};
        const Header = {};
        axios.post(url, data, { Headers: Header })
            .then((res) => {
                // setPcount(JSON.stringify(res.data[0].count))
                console.log("Response ==> " + JSON.stringify(res.data[0].count))
                localStorage.setItem("prospectcount", JSON.stringify(res.data[0].count))
            })
            .catch((err) => {
                console.log("Error ==> " + err)
            })
    })
    return <>
        <div className='Admin_page'>
            <div className="Admin_page_topbar">
            <div className='Admin_page_column1'>
                <Topbar />
            </div>
            </div>
            <div className='Admin_page_contentpart'>
                <div className='Admin_page_contentpart_leftbar'>
                    <LeftBar />
                </div>
                <div className='Admin_page_contentpart_main'>
                    <div className='Admin_page_contentpart_main_row1'>
                        <Bargraph />
                        <Horizontalbar />
                    </div>
                    <div className='Admin_page_contentpart_main_row2'>
                        <div className="Admin_page_contentpart_main_row2_innerrow1">
                            <Summary />
                        </div>
                        <div className="Admin_page_contentpart_main_row2_innerrow2">
                            <SummaryCount />
                            <Progressbar />
                        </div>
                    </div>
                </div>
                <div className='Admin_page_contentpart_list'>
                    <List />
                </div>
            </div>
        </div >
    </>
}