import React from "react";

const subStepsData = {
  warmup: [{ name: "Total", km: 3 }],
  active: [{ name: "Total", km: 3 }],
  cooldown: [{ name: "Total", km: 3 }],
  repeatSteps: [
    { name: "Step 1", km: 2 },
    { name: "Step 2", km: 2 },
  ],
  rampup: [
    { name: "Part 1", km: 2 },
    { name: "Part 2", km: 1 },
    { name: "Part 3", km: 1 },
    { name: "Part 4", km: 1 },
  ],
  rampdown: [
    { name: "Part 1", km: 1 },
    { name: "Part 2", km: 1 },
    { name: "Part 3", km: 1 },
    { name: "Part 4", km: 1 },
  ],
};

const Chart = ({ selectedBlock }) => {
  const subSteps = subStepsData[selectedBlock?.id] || [];

  return (
    <div className="w-full p-5 bg-gray-100 rounded-lg shadow-lg">
      {selectedBlock ? (
        <>
          <h3 className="font-bold text-lg">
            {selectedBlock.label} - {selectedBlock.totalKm} km
          </h3>
          {subSteps.length > 0 ? (
            <div className="flex items-end gap-2 mt-4">
              {subSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#867ce9] w-[40px] text-center rounded-t-md"
                  style={{ height: `${step.km * 20}px` }}
                >
                  <p className="text-xs text-white">{step.km} km</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No sub-steps available.</p>
          )}
        </>
      ) : (
        <p>Select a block to view the details.</p>
      )}
    </div>
  );
};

export default Chart;

