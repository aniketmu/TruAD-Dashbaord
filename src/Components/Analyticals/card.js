import React from "react";

function card(props) {
  return (
    <div
      className="card info-card"
      style={{ backgroundColor: "rgba(234, 231, 231, 0.776)" }}
    >
      <div className="card-body">
        <h5 className="card-title text-start">{props.title}</h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            {props.icon}
          </div>
          <div className="ps-3">
            <h4>{props.number}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default card;
