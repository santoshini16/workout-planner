// components/BlockCard.js

import React from "react";

const BlockCard = ({ block }) => {
  return (
    <div
      className="flex flex-col items-start justify-between p-1 bg-white rounded-lg shadow-md relative m-2"
      style={{
        width: "1084px",
        borderRadius: "12px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex flex-col w-full mb-2">
        <div className="flex items-center justify-between pl-2 pr-2">
        <h2 className="text-lg font-bold text-gray-700">{block.label}</h2>
        <img src="/Area.png" alt="image"/>
        </div>
        <div className="w-full h-[1px] bg-[#E5E5E5] opacity-100 my-2"></div>
        <div className="w-full  h-auto p-[0.1rem] pt-0 flex justify-between items-center gap-2 rounded-[12px] bg-gradient-to-r from-[#464feb1a] to-[#8330e91a]">
            <div className="flex items-center justify-center">
              <div>
                <img src="/Icons1.png" alt="icon"/>
              </div>
            <div className="w-12 h-12 p-3 bg-[#F2F2F2] rounded-[8px] ">
                <img src="/image.png" alt="image" class="w-full h-full object-contain" />
            </div>
            <p className="text-lg font-medium">run</p>
            </div>
            
            <div className="flex mr-2 justify-center items-center">
            <span className="px-4 py-1 mr-2 text-sm font-medium text-black rounded-[8px] bg-white border border-[#CCCCCC]">
                {block.totalKm} KMS
            </span>
            <img src="/Area.png" alt="image" width={'32px'}/>
            </div>
        </div>

       
      </div>
      <div className="flex items-center justify-center w-full m-1">
      <div className="w-[480px] h-[1.5px] bg-[#E5E5E5] opacity-100 my-2"></div>
        <button
          className="py-1 px-4 text-purple-500 border border-purple-500 rounded-full hover:bg-purple-100"
          style={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Add Substep
        </button>
        <div className="w-[470px] h-[1.5px] bg-[#E5E5E5] opacity-100 my-2"></div>
      </div>
    </div>
  );
};

export default BlockCard;

