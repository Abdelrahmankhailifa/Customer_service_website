import React from "react";
import TopBarChat from "./topBarChat";

const TestComponent = () => {
  return (
    <div className="flex flex-row bg-slate-600 ">
      <TopBarChat open={true} />
    </div>
  );
};

export default TestComponent;
