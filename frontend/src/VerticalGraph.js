import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar, Bubble } from "react-chartjs-2";
  import React from "react";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export default function Graph() {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
        },
      },
    };
  
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];
  
    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: [20, 50, 18, 36, 22, 43, 8],
          backgroundColor: "rgba(150, 88, 123, 1)",
          // data: labels.map(() => 50),
          // backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: [120, 150, 118, 136, 122, 143, 108],
          backgroundColor: "rgba(50, 188, 193, 1)"
          // data: labels.map(() => 150),
          // backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  
    return (
      <>
        Test
        <Bar options={options} data={data} />
      </>
    );
  }
  