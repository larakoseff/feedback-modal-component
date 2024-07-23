import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    console.log(`User has selected: ${rating}`)
  };

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedRating(null); 
    setModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <button className="btn--open" onClick={() => setModalOpen(true)}>
          Open modal
        </button>
        {modalOpen && (
          <Modal
            onSubmit={handleButtonClick}
            onCancel={handleCancel}
            onClose={handleButtonClick}
            onSelectRating={handleRatingSelect}
            selectedRating={selectedRating}
          />
        )}
      </div>
    </>
  );
}

export default App;
