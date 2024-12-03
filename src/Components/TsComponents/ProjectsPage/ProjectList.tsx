import ProjectBox from "./ProjectBox";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import {mockProjects} from "../../../models/types";

interface Props {
    projects: mockProjects[];
    alternating?: boolean;
}

export default function ProjectsList({ projects, alternating = false }: Props) {
    const projectList: Array<React.JSX.Element> = [];
    let side = false;
    projects.forEach(project => {
        projectList.push(<ProjectBox key={project.key} title={project.title} image={project.image} desc={project.desc} linkTo={project.linkTo} isRight={side} />)
        if (alternating) {
            side = !side;
        }
    });
    return (
        <div className="flex flex-col max-w-2/5 mt-1 mb-0.5">
            {projectList}
        </div>
    )
}
