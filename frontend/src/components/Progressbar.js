import React, { useEffect, useState } from 'react'
import "./Progressbar.css";
import { AiOutlineMore } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend);






export default function Login() {
  const [leads, setLeads] = useState([])
  const [pros, setPros] = useState([])
  useEffect(() => {
    const url = "http://localhost:3000/dev/prospectprogress";
    // const data = {};
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
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [{leads}, {pros}],
        backgroundColor: [
          "#8833ff",
          "rgba(54, 162, 235, 0.2)",

        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",

        ],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <div className='Progressbarouter'>
        <div className='Progressbarouter_inner'>
          <div className='Progressbarouter_inner_row1'>
            <label>Prospect Progress</label>
            <AiOutlineMore className='Progressbarmore' />
          </div>


          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "10px",
              marginTop: "10px",
              width: "120px",
              height: "120px"

            }}
          >
            <div
              className="test"
              style={{
                backgroundColor: "#FAFAFA",
                position: "absolute",
                width: "115px",
                height: "115px",
                borderRadius: "130px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#8833ff",
                fontWeight: "bold",
                fontFamily: "Arial,Helvetica,Sans-serif"
              }}
            >
              76%
            </div>
            <Doughnut
              options={{ plugins: { legend: { display: false } } }}
              data={data}
            >
            </Doughnut>
          </div>
        </div>
      </div>
    </>
  );
}










