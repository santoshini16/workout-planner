import React from "react";

const workoutBlocks = [
  { id: "warmup", label: "Warm-up", totalKm: 3 },
  { id: "active", label: "Active", totalKm: 3 },
  { id: "cooldown", label: "Cool-down", totalKm: 3 },
  { id: "repeatSteps", label: "Repeat Steps", totalKm: 4 },
  { id: "rampup", label: "Ramp-up", totalKm: 5 },
  { id: "rampdown", label: "Ramp-down", totalKm: 4 },
];

const Block = ({ onSelectBlock }) => {
  return (
    <div className="w-[312px] min-h-[201px] bg-white shadow-md rounded-[12px] flex flex-col justify-center items-center">
      <p className="font-bold text-[16px] leading-[22px] pl-4 text-[#242424] font-dm-sans">
        Click or drag the blocks to build workout
      </p>
      <div className="w-[280px] h-[1px] bg-[#E5E5E5] opacity-100 my-4"></div>
      
      <div className="grid grid-cols-3 gap-2">
        {workoutBlocks.map((block) => (
          <div
            key={block.id}
            className="bg-[#d1c7fc] w-[90px] h-[60px] rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer"
            onClick={() => onSelectBlock(block)}
          >
            <div className="w-full h-2/3 bg-[#867ce9] rounded-t-lg flex justify-center items-center">
              <p className="font-bold text-xs text-white">{block.label}</p>
            </div>
            <div className="w-full h-1/3 bg-[#b9b1f9] rounded-b-lg flex justify-center items-center">
              <p className="text-xs text-white">{block.totalKm} km</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Block;



