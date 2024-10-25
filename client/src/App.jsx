import React, { useState } from "react";
import Header from "./components/Header";
import Block from "./components/Blocks";
import Chart from "./components/Chart";

const App = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleSelectBlock = (block) => {
    setSelectedBlock(block);
  };

  return (
    <div className="container mx-auto p-5">
      <Header />
      <div className="flex space-x-8 m-4">
        <Block onSelectBlock={handleSelectBlock} />
        <Chart selectedBlock={selectedBlock} />
      </div>
    </div>
  );
};

export default App;



