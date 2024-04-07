import ProjectBox from "./ProjectBox";
import "./projectsHolder.css"

export default function ProjectsHolder({projects})
{
    var projectList = [];
    projects.forEach(project => {
        projectList.push(<ProjectBox title={project.title} image={project.image} desc={project.desc}/>)
    });
    return (
        <div className="projectsHolder">
            {projectList}
        </div>
    )
}