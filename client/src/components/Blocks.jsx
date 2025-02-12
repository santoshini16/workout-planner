import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Block = ({workoutBlocks,onSelectBlock}) => (
  <Droppable droppableId="block">
    {(provided) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className="w-[312px] p-4 h-[250px] bg-white shadow-md rounded-[12px] flex flex-col  items-center"
      >
        <p className="font-bold text-[16px] leading-[22px] pl-4 text-[#242424] font-dm-sans">
          Click or drag the blocks to build workout
        </p>
        <div className="w-[280px] h-[1px] bg-[#E5E5E5] opacity-100 my-4"></div>

        <div className="grid grid-cols-3 gap-2">
          {workoutBlocks.map((block, index) => (
            <Draggable key={block.id} draggableId={block.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="bg-[#d1c7fc] w-[90px] h-[60px] rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => onSelectBlock(block)}
                >
                  <img
                    src={block.image}
                    alt={block.label}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </Draggable>
          ))}
        </div>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default Block;





