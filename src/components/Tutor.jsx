import React from "react";

const Tutor = ({ name, pictureUrl, title, onClick }) => (
  <div className="tutorCard" onClick={onClick}>
    <img src={pictureUrl} alt={"tutorImg"} />
    <h2>{name}</h2>
    <p>{title}</p>
  </div>
);

export default Tutor;
