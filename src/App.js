import React from "react";

import { Title } from "./Title";

function App() {
  const text = "This is the way...";
  const isRed = true;
  return (
    <div>
      <Title text={text} isRed={isRed} />
    </div>
  );
}

export default App;
