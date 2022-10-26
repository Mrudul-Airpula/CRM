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
import { useEffect, useState } from "react";


export default function AdminDash() {

    const [pcount, setPcount] = useState("");

    const [orangebar, setOrangebar] = useState([]);
    const [greenbar, setGreenbar] = useState([]);
    const [bluebar, setBluebar] = useState([]);

    const [leads, setLeads] = useState([]);
    const [pros, setPros] = useState([]);

    const [bluecamp, setBlueCamp] = useState([]);
    const [blueheight, setBlueHeight] = useState(0);
    const [greenheight, setGreenHeight] = useState(0);
    const [orangeheight, setOrangeHeight] = useState(0);

    const [genman, setGenMan] = useState(0);
    const [areaman, setAreaMan] = useState(0);
    const [assisman, setAssisMan] = useState(0);
    const [salesman, setSalesMan] = useState(0);

    const [user, setUser] = useState([]);

    //ProspectGrowth Axios

    useEffect(() => {
        const url = "http://localhost:3000/dev/prospectGrowth";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/prospectGrowth";
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

    //LeadsFunnel Axios

    useEffect(() => {
        const url = "http://localhost:3000/dev/leadsfunnel";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/leadsfunnel";
        const data = {};
        const header = {};
        axios.post(url, data, { Headers: header })
            .then((res) => {
                console.log("Response => " + (JSON.stringify(res.data[0].leadscount)) + (JSON.stringify(res.data[1].leadscount)) + (JSON.stringify(res.data[2].leadscount)))
                setOrangebar(res.data[0].leadscount)
                setGreenbar(res.data[1].leadscount)
                setBluebar(res.data[2].leadscount)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    //ProspectProgress Axios

    useEffect(() => {
        const url = "http://localhost:3000/dev/prospectprogress";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/prospectprogress";
        const header = {};
        axios.post(url, { Headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].Leads) + JSON.stringify(res.data[1].Leads))
                setLeads(res.data[0].Leads)
                setPros(res.data[1].Leads)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    //ManagerWiseProspectCount Axios

    useEffect(() => {
        const url = "http://localhost:3000/dev/ManagerwiseProspectCount";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/ManagerwiseProspectCount";
        const data = {};
        const header = {};
        axios.post(url, data, { Headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    //CampaignWiseProspectCount Axios

    useEffect(() => {
        const url = "http://localhost:3000/dev/campaignwiseprospectcount";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcount";
        const data = {};
        const header = {};
        axios.post(url, data, { Headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].count))
                setBlueHeight(res.data[0].count)
                setBlueCamp(res.data[0].txtCampaignName)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })



    useEffect(() => {
        const url = "http://localhost:3000/dev/getuserlist";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/getuserlist";
        const data = {};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                setUser((res.data))
                console.log("Response => " + JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log("Error => " + err)
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
                        <div className="Admin_page_contentpart_main_row1_bargraph">
                        <Bargraph orangeh={orangeheight} greenh={greenheight} blueh={blueheight} bluec={bluecamp} />
                        </div>
                        <div className="Admin_page_contentpart_main_horizontal">
                        <Horizontalbar orange={orangebar} green={greenbar} blue={bluebar} />
                        </div>
                    </div>
                    <div className='Admin_page_contentpart_main_row2'>
                        <div className="Admin_page_contentpart_main_row2_innerrow1">
                            <Summary genc={genman} assisc={assisman} salesc={salesman} areac={areaman} />
                        </div>
                        <div className="Admin_page_contentpart_main_row2_innerrow2">
                            <SummaryCount pcount={pcount} />
                            <Progressbar leadsc={leads} prosc={pros} />
                        </div>
                    </div>
                </div>
                <div className='Admin_page_contentpart_list'>
                    <List user={user} />
                </div>
            </div>
        </div >
    </>
}

