

// import React from "react";
// import { Resizable } from "react-resizable";
// import { Droppable } from "react-beautiful-dnd";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const Chart = ({ selectedBlock, clearBlocks }) => {
  
//   const blocks = Array.isArray(selectedBlock) ? selectedBlock : [];

//   const subStepsData = {
//     warmup: [{ name: "Total", km: 3, percentage: 50 }],
//     active: [{ name: "Total", km: 3, percentage: 75 }],
//     cooldown: [{ name: "Total", km: 3, percentage: 35 }],
//     repeatSteps: [
//       { name: "Step 1", km: 2, percentage: 75 },
//       { name: "Step 2", km: 2, percentage: 60 },
//     ],
//     rampup: [
//       { name: "Part 1", km: 2, percentage: 61 },
//       { name: "Part 2", km: 1, percentage: 73 },
//       { name: "Part 3", km: 1, percentage: 82 },
//       { name: "Part 4", km: 1, percentage: 95 },
//     ],
//     rampdown: [
//       { name: "Part 1", km: 1, percentage: 95 },
//       { name: "Part 2", km: 1, percentage: 82 },
//       { name: "Part 3", km: 1, percentage: 73 },
//       { name: "Part 3", km: 1, percentage: 61 },
//     ],
//   };

//   // Prepare combined data for the chart
//   const combinedData = {
//     labels: ["Total Distance"], // Single x-label
//     datasets: [],
//   };

//   let totalKm = 0;

//   // Iterate over each selected block to create datasets
//   blocks.forEach((block) => {
//     const subSteps = subStepsData[block?.id] || [];
//     const blockKm = subSteps.reduce((sum, step) => sum + step.km, 0);
//     totalKm += blockKm;

//     // Prepare dataset for each block's sub-steps
//     subSteps.forEach((step) => {
//       combinedData.datasets.push({
//         label: `${block.label} - ${step.name}`, // Unique label for each step
//         data: [step.percentage], // Percentage for the step
//         backgroundColor: `rgba(134, 124, 233, 0.7)`,
//         borderColor: `rgba(134, 124, 233, 1)`,
//         borderWidth: 1,
//         barPercentage: 0.993,
//         categoryPercentage: 1.0,
//       });
//     });
//   });

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: true, position: "top" },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: { display: true, text: "Percentage (%)" },
//       },
//       x: {
//         title: { display: true, text: `${totalKm} km` },
//         ticks: {
//           // Hide individual labels to only show total distance
//           display: false,
//         },
//       },
//     },
//   };

//   return (
//     <Droppable droppableId="chart" direction="vertical">
//       {(provided) => (
//         <div
//           {...provided.droppableProps}
//           ref={provided.innerRef}
//           className="w-full p-5 bg-gray-100 rounded-lg shadow-lg"
//           style={{ height: "400px" }} // Adjust height as needed
//         >
//           {blocks.length > 0 ? (
//             <>
//                <button 
//                 onClick={clearBlocks} 
//                 className="absolute top-32 right-14 p-[0.1rem] bg-gray-200 text-black rounded"
//               >
//                 Clear Blocks
//               </button>
//               <Resizable width={500} height={400} minConstraints={[300, 300]}>
//                 <div style={{ width: "100%", height: "100%" }}>
//                   <Bar data={combinedData} options={chartOptions} />
//                 </div>
//               </Resizable>
             
//             </>
//           ) : (
//             <>
//               <p className="text-center text-gray-500">Drag a block here to view details.</p>
//               <img src="/background.png" alt="image" />
//             </>
            
//           )}
//           {provided.placeholder}
//         </div>
//       )}
//     </Droppable>
//   );
// };

// export default Chart;




import React from "react";
import { Resizable } from "react-resizable";
import { Droppable } from "react-beautiful-dnd";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Chart = ({ selectedBlock, clearBlocks }) => {
  
  const blocks = Array.isArray(selectedBlock) ? selectedBlock : [];

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
      { name: "Part 3", km: 1, percentage: 61 },
    ],
  };

  // Prepare combined data for the chart
  const combinedData = {
    labels: ["Total Distance"], // Single x-label
    datasets: [],
  };

  let totalKm = 0;

  // Iterate over each selected block to create datasets
  blocks.forEach((block) => {
    const subSteps = subStepsData[block?.id] || [];
    const blockKm = subSteps.reduce((sum, step) => sum + step.km, 0);
    totalKm += blockKm;

    // Prepare dataset for each block's sub-steps
    subSteps.forEach((step) => {
      combinedData.datasets.push({
        label: `${block.label} - ${step.name}`, // Unique label for each step
        data: [step.percentage], // Percentage for the step
        backgroundColor: `rgba(134, 124, 233, 0.7)`,
        borderColor: `rgba(134, 124, 233, 1)`,
        borderWidth: 1,
        barPercentage: 0.993,
        categoryPercentage: 1.0,
      });
    });
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Percentage (%)" },
      },
      x: {
        title: { display: true, text: `${totalKm} km` },
        ticks: {
          // Hide individual labels to only show total distance
          display: false,
        },
      },
    },
  };

  return (
    <Droppable droppableId="chart" direction="vertical">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="w-full p-5 bg-gray-100 rounded-lg shadow-lg"
          style={{ height: "400px" }} // Adjust height as needed
        >
          {blocks.length > 0 ? (
            <>
              <button 
                onClick={clearBlocks} 
                className="absolute top-32 right-14 p-[0.1rem] bg-gray-200 text-black rounded"
              >
                Clear Blocks
              </button>
              <Resizable width={500} height={400} minConstraints={[300, 300]}>
                <div style={{ width: "100%", height: "100%" }}>
                  <Bar data={combinedData} options={chartOptions} />
                </div>
              </Resizable>
            </>
          ) : (
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center">
                <p className="text-center text-gray-500">Drag a block here to view details.</p>
                <img 
                  src="/background.png" 
                  alt="image" 
                  className="max-w-full h-auto mt-2" // Adjusted classes for clarity
                />
              </div>
            </div>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Chart;









