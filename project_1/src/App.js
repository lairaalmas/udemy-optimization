import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App running");

  // const toggleParagraphHadler = useCallback(() => {
  //   setShowParagraph((prev) => !prev);
  // }, []);

  const toggleParagraphHadler = useCallback(() => {
    if (allowToggle) setShowParagraph((prev) => !prev);
  }, [allowToggle]);

  const allowToggleHadler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHadler}>Allow toggle</Button>
      <Button onClick={toggleParagraphHadler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
