import React, { useState } from "react";

import Header from "./components/Header";
import Block from "./components/Blocks";
import Chart from "./components/Chart";
import { DragDropContext } from "react-beautiful-dnd";

const workoutBlocks = [
  { id: "warmup", label: "Warm-up", totalKm: 3 },
  { id: "active", label: "Active", totalKm: 3 },
  { id: "cooldown", label: "Cool-down", totalKm: 3 },
  { id: "repeatSteps", label: "Repeat Steps", totalKm: 4 },
  { id: "rampup", label: "Ramp-up", totalKm: 5 },
  { id: "rampdown", label: "Ramp-down", totalKm: 4 },
];

const App = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(result)

    // Only proceed if there is a valid drop destination
    if (!destination || destination.droppableId !== "chart") return;

    // Get the block based on draggableId and set as selected block
    const draggedBlock = workoutBlocks.find((block) => block.id === draggableId);
    if (draggedBlock) {
      setSelectedBlock(draggedBlock);
    }
  };

  return (
     
      <div className="container mx-auto p-5">
        <Header />
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex space-x-8 m-4">
          <Block workoutBlocks={workoutBlocks} />
          <Chart selectedBlock={selectedBlock} />
        </div>
        </DragDropContext>
      </div>
  );
};

export default App;




