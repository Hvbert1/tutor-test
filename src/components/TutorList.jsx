import React from "react";
import Tutor from "./Tutor";

const TutorList = ({ tutors, onTutorClick }) => (
  <div className="tutorList">
    {tutors.map((tutor) => (
      <Tutor
        key={tutor.id}
        name={tutor.name}
        pictureUrl={tutor.pictureUrl}
        title={tutor.title}
        description={tutor.description}
        onClick={() => onTutorClick(tutor)}
      />
    ))}
  </div>
);

export default TutorList;
