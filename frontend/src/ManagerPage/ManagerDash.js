import "./ManagerDash.css";
import Topbar from './components/Topbar';
import LeftBar from './components/LeftBar';
import Horizontalbar from './components/Horizontalbar';
import Progressbar from './components/Progressbar';
import Bargraph from './components/Bargraph';
import Summary from './components/Summary';
import SummaryCount from "./components/SummaryCount";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManagerDash() {
    const [pcount, setPcount] = useState("");

    // const [orangebar, setOrangebar] = useState([]);
    // const [greenbar, setGreenbar] = useState([]);
    // const [bluebar, setBluebar] = useState([]);

    const [leads, setLeads] = useState([]);
    const [pros, setPros] = useState([]);

    // const [bluecamp, setBlueCamp] = useState([]);
    // const [blueheight, setBlueHeight] = useState([]);
    // const [greenheight, setGreenHeight] = useState([]);
    // const [orangeheight, setOrangeHeight] = useState([]);

    // const [genman, setGenMan] = useState();
    // const [areaman, setAreaMan ] = useState();
    // const [assisman, setAssisMan] = useState();
    // const [salesman, setSalesMan] = useState();


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

    useEffect(() => {
        const url = "http://localhost:3000/dev/leadsfunnel";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/leadsfunnel";
        const data = {};
        const header = {};
        axios.post(url, data, { Headers: header })
            .then((res) => {
                console.log("Response => " + (JSON.stringify(res.data[0].leadscount)) + (JSON.stringify(res.data[1].leadscount)) + (JSON.stringify(res.data[2].leadscount)))
                // setOrangebar(res.data[0].leadscount)
                // setGreenbar(res.data[1].leadscount)
                // setBluebar(res.data[2].leadscount)
                localStorage.setItem("orange", res.data[0].leadscount)
                localStorage.setItem("green", res.data[1].leadscount)
                localStorage.setItem("blue", res.data[2].leadscount)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    useEffect(() => {
        const url = "http://localhost:3000/dev/prospectprogress";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/prospectprogress";
        const header = {};
        axios.post(url, { Headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].Leads) + JSON.stringify(res.data[1].Leads))
                // setLeads(res.data[0].Leads)
                // setPros(res.data[1].Leads)
                localStorage.setItem("leads", res.data[0].Leads)
                localStorage.setItem("pros", res.data[1].Leads)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })


    useEffect(() => {
        const url = "http://localhost:3000/dev/ManagerwiseProspectCount";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/ManagerwiseProspectCount";
        const data = {};
        const header = {};
        axios.post(url, data, { Headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                // localStorage.setItem("salescount", 0)
                // localStorage.setItem("assiscount", 0)
                // localStorage.setItem("gencount", 0)
                // localStorage.setItem("areacount", 0)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    useEffect(() => {
        const url = "http://localhost:3000/dev/campaignwiseprospectcount";
        // const url = "https://y64ha1qk80.execute-api.us-east-1.amazonaws.com/dev/campaignwiseprospectcount";
        const data = {};
        const header = {};
        axios.post(url, data, { Headers: header })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data[0].count))
                // setBlueHeight(res.data[0].count)
                // setBlueCamp(res.data[0].txtCampaignName)
                localStorage.setItem("blueheight", res.data[0].count)
                localStorage.setItem("bluename", res.data[0].txtCampaignName)
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    })

    return <>
        <div className="ManagerDash_page">
            <div className="ManagerDash_page_topbar">
                <Topbar />
            </div>
            <div className="ManagerDash_page_content">
                <div className="ManagerDash_page_content_leftbar">
                    <LeftBar />
                </div>
                <div className="ManagerDash_page_content_area">
                    <div className="ManagerDash_page_content_area_row1">
                        <Bargraph />
                        <Horizontalbar />
                    </div>
                    <div className="ManagerDash_page_content_area_row2">
                        <div className="ManagerDash_page_content_area_row2_summary">
                            <Summary />
                        </div>
                        <div className="ManagerDash_page_content_area_row2_bars">
                            <SummaryCount pcount={pcount} />
                            <Progressbar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}