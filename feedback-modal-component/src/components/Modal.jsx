import React from "react";
import "./Modal.css";

export const Modal = ({
  onSubmit,
  onCancel,
  onClose,
  onSelectRating,
  selectedRating,
}) => {
  const handleButtonClick = (rating) => {
    onSelectRating(rating);
  };

  const getButtonStyle = (rating) => ({
    backgroundColor: selectedRating === rating ? "#7a58f4" : "transparent",
    fontWeight: selectedRating === rating ? 500 : 300,
  });

  return (
    <div className="modal--container">
      <div className="modal">
        <div className="modal--header">
          <img
            src="../images/close-white.svg"
            className="close--icon"
            alt="close icon"
            onClick={() => onClose()}
          />
        </div>
        <div className="modal--content">
          <h1>
            How likely are you to recommend FrontendPro to someone you know?
          </h1>
        </div>
        <div className="rating--container">
          <div className="ratings">
            <button
              className="btn--ratings"
              style={getButtonStyle(1)}
              onClick={() => handleButtonClick(1)}
            >
              1
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(2)}
              onClick={() => handleButtonClick(2)}
            >
              2
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(3)}
              onClick={() => handleButtonClick(3)}
            >
              3
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(4)}
              onClick={() => handleButtonClick(4)}
            >
              4
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(5)}
              onClick={() => handleButtonClick(5)}
            >
              5
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(6)}
              onClick={() => handleButtonClick(6)}
            >
              6
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(7)}
              onClick={() => handleButtonClick(7)}
            >
              7
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(8)}
              onClick={() => handleButtonClick(8)}
            >
              8
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(9)}
              onClick={() => handleButtonClick(9)}
            >
              9
            </button>
            <button
              className="btn--ratings"
              style={getButtonStyle(10)}
              onClick={() => handleButtonClick(10)}
            >
              10
            </button>
          </div>
          <div className="rating--text">
            <div>Not likely at all</div>
            <div>Extremely Likely</div>
          </div>
        </div>
        <div className="modal--footer">
          <button className="btn btn--cancel" onClick={() => onCancel()}>
            Cancel
          </button>
          <button className="btn btn--submit" onClick={() => onSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
