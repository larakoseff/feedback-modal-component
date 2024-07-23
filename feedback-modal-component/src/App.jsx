import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(true);

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <button className="btn--open" onClick={() => setModalOpen(true)}>
          Open model
        </button>
        {modalOpen && (
          <Modal
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
            onClose={handleButtonClick}
          />
        )}
      </div>
    </>
  );
}

export default App;
