import React from "react";
import { Resizable } from "re-resizable";
import { Bar } from "react-chartjs-2";
import { subStepsData } from "../data/subStepsData";
import { Draggable } from "react-beautiful-dnd";

const Chart = ({ block, index }) => {
  const subSteps = subStepsData[block.id] || [];

  const totalKm = subSteps.reduce((sum, step) => sum + step.km, 0);
  const chartData = {
    labels: Array(subSteps.length).fill(""),
    datasets: [
      {
        label: `${block.label} - Percentage`,
        data: subSteps.map((step) => step.percentage),
        backgroundColor: "rgba(134, 124, 233, 0.7)",
        borderColor: "rgba(134, 124, 233, 1)",
        borderWidth: 1,
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
        text: `${block.label} Chart`,
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
      },
    },
  };

  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided) => (
        <Resizable
          className="w-full bg-gray-100 rounded-lg shadow-lg p-4"
          defaultSize={{ width: "100%", height: 400 }}
          minWidth="50%"
          minHeight={200}
          maxHeight={600}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Bar data={chartData} options={chartOptions} />
        </Resizable>
      )}
    </Draggable>
  );
};

export default Chart;






