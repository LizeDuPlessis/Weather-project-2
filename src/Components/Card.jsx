import React from "react";

function Card({ children }) {
  return (
    <div className="card">
      <h2>{children}</h2>
    </div>
  );
}

export default Card;
