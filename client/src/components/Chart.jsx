// Import necessary libraries and components
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ selectedBlock }) => {
  const subStepsData = {
    warmup: [{ name: "Total", km: 3, percentage: 50 }],
    active: [{ name: "Total", km: 3, percentage: 75 }],
    cooldown: [{ name: "Total", km: 3, percentage: 35 }],
    repeatSteps: [
      { name: "Step 1", km: 2, percentage: 75 },
      { name: "Step 2", km: 2, percentage: 60 },
    ],
    rampup: [
      { name: "Part 1", km: 2, percentage: 61 },
      { name: "Part 2", km: 1, percentage: 73 },
      { name: "Part 3", km: 1, percentage: 82 },
      { name: "Part 4", km: 1, percentage: 95 },
    ],
    rampdown: [
      { name: "Part 1", km: 1, percentage: 95 },
      { name: "Part 2", km: 1, percentage: 82 },
      { name: "Part 3", km: 1, percentage: 73 },
      { name: "Part 4", km: 1, percentage: 61 },
    ],
  };

  const subSteps = subStepsData[selectedBlock?.id] || [];
  const totalKm = subSteps.reduce((sum, step) => sum + step.km, 0);

  const chartData = {
    labels: Array(subSteps.length).fill(""),
    datasets: [
      {
        label: `${selectedBlock?.label} - Percentage`,
        data: subSteps.map((step) => step.percentage),
        backgroundColor: "rgba(134, 124, 233, 0.7)",
        borderColor: "rgba(134, 124, 233, 1)",
        borderWidth: 1,
        barPercentage: 0.994, 
        categoryPercentage: 1.0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      title: {
        display: true,
        text: `${selectedBlock?.label} Chart`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Percentage (%)",
        },
      },
      x: {
        title: {
          display: true,
          text: `Total Distance: ${totalKm} km`,
        },
        ticks: {
          callback: (value, index) => (index === subSteps.length - 1 ? `${totalKm} km` : ""),
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <Droppable droppableId="chart">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-full p-5 bg-gray-100 rounded-lg shadow-lg"
          style={{ height: "400px" }}
        >
          {selectedBlock ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            <p className="text-center text-gray-500">Drag a block here to view details.</p>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Chart;






