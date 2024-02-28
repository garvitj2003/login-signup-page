import React from "react";
import Container from "./components/Container";
import { Navbar } from "./components/navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center h-full bg-gradient-to-br from-purple-300 to-purple-600">
      <Navbar />
      <Container />
    </div>
  );
};

export default App;
