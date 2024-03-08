import React from "react";
import Tutor from "./Tutor";

const TutorList = ({ tutors }) => (
  <div className="tutorList">
    {tutors.map((tutor) => (
      <Tutor
        key={tutor.id}
        name={tutor.name}
        pictureUrl={tutor.pictureUrl}
        description={tutor.description}
      />
    ))}
  </div>
);

export default TutorList;
