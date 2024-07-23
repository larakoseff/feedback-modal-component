import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  return (
    <>
      <div className="card">
        <Modal />
        <button>Open model</button>
      </div>
    </>
  );
}

export default App;
