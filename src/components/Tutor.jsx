import React from "react";

const Tutor = ({ name, pictureUrl, description }) => (
  <div className="tutorCard">
    <img src={pictureUrl} alt={name} />
    <h2>{name}</h2>
    <p>{description}</p>
  </div>
);

export default Tutor;
