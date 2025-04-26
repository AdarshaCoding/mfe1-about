import React, { useState } from "react";
import About from "./About";

const App = () => {
  const [userName, setUserName] = useState("Standalone User");
  return (
    <div>
      <About userName={userName} onChangeUserName={setUserName} />
    </div>
  );
};

export default App;
