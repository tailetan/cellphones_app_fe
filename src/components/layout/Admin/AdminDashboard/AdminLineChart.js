import React, { useState } from "react";
import { Chart } from "primereact/chart";

const AdminLineChart = () => {
  const [lineStylesData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Đang xử lý",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.4,
        borderColor: "#42A5F5",
      },
      {
        label: "Đã xử lý",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderDash: [5, 5],
        tension: 0.4,
        borderColor: "#66BB6A",
      },
      {
        label: "Đã giao hàng",
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: true,
        borderColor: "#FFA726",
        tension: 0.4,
        backgroundColor: "rgba(255,167,38,0.2)",
      },
    ],
  });

  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
          font: {
            family: "Quicksand, sans-serif",
          },
        },
      },
      tooltip: {
        titleFont: {
          family: "Quicksand, sans-serif",
        },
        bodyFont: {
          family: "Quicksand, sans-serif",
        },
        footerFont: {
          family: "Quicksand, sans-serif",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
          font: {
            family: "Quicksand, sans-serif",
          },
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        ticks: {
          color: "#495057",
          font: {
            family: "Quicksand, sans-serif",
          },
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  return (
    <div className="card">
      <Chart type="line" data={lineStylesData} options={basicOptions} />
    </div>
  );
};

export default AdminLineChart;
