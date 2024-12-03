import {useMockProjects} from "../Hooks/useProjects";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import ProjectList from '../Components/TsComponents/ProjectsPage/ProjectList';

export default function ProjectsPage() {
    const data = useMockProjects()
    return (
        <>
            <div>
                <div className="text-center font-bold text-2xl p-8">
                    <h1>Nasze Projekty</h1>
                </div>
                <div className="flex flex-col items-center justify-center pl-80">
                    <ProjectList projects={data} alternating={true}/>
                </div>
            </div>
        </>
    )
}