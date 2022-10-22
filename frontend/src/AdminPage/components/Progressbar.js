import React, { useEffect, useState } from 'react'
import "./Progressbar.css";
import { AiOutlineMore } from "react-icons/ai";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Login() {
  const leads = localStorage.getItem("leads")
  const pros = localStorage.getItem("pros")

  var per=(pros/leads)*100;
  var per1=per.toFixed(2)
  
  const data = {
   
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [pros, leads],
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
                backgroundColor: "#F3F3F4",
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
              {per1}%
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










