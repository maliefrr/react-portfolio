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
      <h3 data-aos="fade-up">{title}</h3>
          <div className="project-detail"  data-aos="fade-up-left">
            <p>{desc}</p>
            <div className="project-image">
              <img src={image} alt=""  data-aos="fade-up-right"/>
            </div>
          </div>
    </div>
  )
}

export default Project
