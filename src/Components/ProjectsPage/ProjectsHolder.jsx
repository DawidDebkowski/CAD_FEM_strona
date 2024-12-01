import PropTypes from "prop-types"
import ProjectBox from "./ProjectBox";
import "./projectsHolder.css"
import React from "react";

export default function ProjectsHolder({ projects, alternating = false }) {
    let projectList = [];
    let side = false;
    projects.forEach(project => {
        projectList.push(<ProjectBox title={project.title} image={project.image} desc={project.desc} linkTo={project.linkTo} isRight={side} />)
        if (alternating) {
            side = !side;
        }
    });
    return (
        <div className="projectsHolder">
            {projectList}
        </div>
    )
}
ProjectsHolder.propTypes = {
  alternating: PropTypes.bool,
  projects: PropTypes.shape({
    forEach: PropTypes.func
  })
}
