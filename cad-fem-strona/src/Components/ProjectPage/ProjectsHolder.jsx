import ProjectBox from "./ProjectBox";
import "./projectsHolder.css"

export default function ProjectsHolder({projects, alternating=false})
{
    var projectList = [];
    projects.forEach(project => {
        projectList.push(<ProjectBox title={project.title} image={project.image} desc={project.desc} linkTo={project.linkTo}/>)
    });
    return (
        <div className="projectsHolder">
            {projectList}
        </div>
    )
}