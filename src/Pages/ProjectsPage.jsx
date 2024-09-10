import ProjectsHolder from "../Components/ProjectsPage/ProjectsHolder.jsx";
import "./projectsPage.css"
import json_project from "./../assets/projects.json"

export default function ProjectsPage() {
    return (
        <div>
            <div className="heading">
                <h1>Nasze Projekty</h1>
            </div>
            <div className="mainBody">
                <ProjectsHolder projects={json_project} />
            </div>
        </div>
    )
}