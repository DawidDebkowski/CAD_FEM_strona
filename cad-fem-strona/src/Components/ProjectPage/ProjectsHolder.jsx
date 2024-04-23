import ProjectBox from "./ProjectBox";
import "./projectsHolder.css"

export default function ProjectsHolder({projects, alternating=false})
{
    let projectList = [];
    let side = false;
    projects.forEach(project => {
        projectList.push(<ProjectBox title={project.title} image={project.image} desc={project.desc} linkTo={project.linkTo} isRight={side}/>)
        if(alternating)
        {
            side = !side;
        }
    });
    return (
        <div className="projectsHolder">
            {projectList}
        </div>
    )
}