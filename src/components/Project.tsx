import React from "react";
import "../css/style.css";

interface projectProps {
    title : string,
    desc : string,
    image : string
}

const Project : React.FC<projectProps> = ({title,desc,image}) => {
  return (
    <div className="project-items">
      <h3>{title}</h3>
          <div className="project-detail">
            <p>{desc}</p>
            <div className="project-image">
              <img src={image} alt="" />
            </div>
          </div>
    </div>
  )
}

export default Project
