
import React, { useState } from "react";
import Header from "./components/Header";
import Block from "./components/Blocks";
import Chart from "./components/Chart";
import BlockCard from "./components/BlockCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const workoutBlocks = [
  { id: "warmup", label: "Warm-up", totalKm: 3, image: "/Block.png" },
  { id: "active", label: "Active", totalKm: 3, image: "/Block1.png" },
  { id: "cooldown", label: "Cool-down", totalKm: 3, image: "/Block2.png" },
  { id: "repeatSteps", label: "Repeat Steps", totalKm: 4, image: "/Block3.png" },
  { id: "rampup", label: "Ramp-up", totalKm: 5, image: "/Block4.png" },
  { id: "rampdown", label: "Ramp-down", totalKm: 4, image: "/Block5.png" },
];


const App = () => {
  const [selectedBlocks, setSelectedBlocks] = useState([]);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  
    if (!destination) return; // Exit if no destination
  
    setSelectedBlocks((prevBlocks) => {
      const updatedBlocks = Array.isArray(prevBlocks) ? [...prevBlocks] : [];
  
      if (source.droppableId === "block" && destination.droppableId === "chart") {
        // Dragging from 'block' to 'chart'
        const draggedBlock = workoutBlocks.find((block) => block.id === draggableId);
        if (draggedBlock) {
        
          const indexToInsert = destination.index === 0 && updatedBlocks.length > 0 
            ? updatedBlocks.length 
            : destination.index;
  
          console.log("Adding new block at index:", indexToInsert);
          updatedBlocks.splice(indexToInsert, 0, draggedBlock);
        }
      } else if (source.droppableId === "chart" && destination.droppableId === "chart") {
        // Reordering within 'chart'
        const [movedBlock] = updatedBlocks.splice(source.index, 1);
        updatedBlocks.splice(destination.index, 0, movedBlock);
        console.log("Reordering block to index:", destination.index);
      }
  
      return updatedBlocks;
    });
  };
  
  const handleSelectBlock = (block) => {
    setSelectedBlocks((prevBlocks) => [...prevBlocks, block]);
  };

  // Function to clear all selected blocks
  const clearBlocks = () => {
    setSelectedBlocks([]);
  };

  return (
    <div className="container mx-auto p-5">
      <Header />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex space-x-8 m-4 justify-center items-center">
          <Block workoutBlocks={workoutBlocks} onSelectBlock={handleSelectBlock} />
          <Droppable droppableId="chart" direction="vertical">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex-1 p-5"
                style={{ minWidth: "500px", height: "400px" }} 
              >
                <Chart selectedBlock={selectedBlocks} clearBlocks={clearBlocks} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      {/* Display BlockCard components below the chart */}
      <div className="mt-10 ml-[350px] flex flex-col justify-center items-center">
        {selectedBlocks.map((block) => (
          <BlockCard key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
};

export default App;








