import React from "react";
import "./Modal.css";

export const Modal = () => {
  return (
    <div className="modal--container">
      <div className="modal">
        <div className="modal--header">
          <img
            src="../images/close-white.svg"
            className="close--icon"
            alt="close icon"
          />
        </div>
        <div className="modal--content">
          <h1>
            How likely are you to recommend FrontendPro to someone you know?
          </h1>
        </div>
        <div className="rating--container">
          <div className="ratings">
            <button className="btn--ratings">1</button>
            <button className="btn--ratings">2</button>
            <button className="btn--ratings">3</button>
            <button className="btn--ratings">4</button>
            <button className="btn--ratings">5</button>
            <button className="btn--ratings">6</button>
            <button className="btn--ratings">7</button>
            <button className="btn--ratings">8</button>
            <button className="btn--ratings">9</button>
            <button className="btn--ratings">10</button>
          </div>
          <div className="rating--text">
            <div>Not likely at all</div>
            <div>Extremely Likely</div>
          </div>
        </div>
        <div className="modal--footer">
          <button className="btn btn--cancel">Cancel</button>
          <button className="btn btn--submit">Submit</button>
        </div>
      </div>
    </div>
  );
};
