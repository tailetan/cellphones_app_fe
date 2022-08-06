import { Chart } from "primereact/chart";
import React, { useState } from "react";

const AdminBarChart = () => {
  const [chartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        type: "bar",
        label: "Điện thoại",
        backgroundColor: "#ff5959",
        borderColor: "white",
        borderWidth: 2,
        data: [50, 25, 12, 48, 56, 76, 42, 100, 90, 80, 70, 60],
      },
      {
        type: "bar",
        label: "Laptop",
        backgroundColor: "#525594",
        data: [21, 84, 24, 75, 37, 65, 34, 54, 45, 67, 78, 90],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Tablet",
        backgroundColor: "#008037",
        data: [41, 52, 24, 74, 23, 21, 32, 40, 50, 60, 70, 80],
      },
      {
        type: "bar",
        label: "Phụ kiện",
        backgroundColor: "#97bbe8",
        data: [41, 52, 24, 74, 23, 21, 32, 21, 50, 60, 70, 80],
      },
    ],
  });

  const [lightOptions] = useState({
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
  });

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={lightOptions} />
    </div>
  );
};

export default AdminBarChart;
