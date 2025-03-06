import ProjectPhotoHolder from "./ProjectPhotoHolder";
import SponsorLogos from "./SponsorLogos";
import {useMockProject } from "../../../Hooks/useProjects";
import {project} from "../../../models/types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import PhotoGallery from "./PhotoGallery";

export default function Project() {

    const project:project = useMockProject();

    return (
        <>
            <div className="w-4/5 bg-zinc-200 rounded">
                <div className="p-5">
                    <img src="/zdjecia/gdynia2024/ppl3.jpg" alt="głowne zdjęcie postu" className="w-full h-72 rounded object-cover"/>
                    <div className="text-center pb-2 pt-1">
                        <h1 className="m-2.5 text-4xl font-bold">{project.title}</h1>
                        {/*<p className="text-center">{project.description}</p>*/}
                    </div>
                    <ProjectPhotoHolder alternating={true} paragraphs={project.paragraphs}/>
                    <p className="text-m font-bold leading-7 text-center">
                        {project.additionalMessage}
                    </p>
                    <SponsorLogos sponsors={project.sponsors}/>
                </div>
                <div className="text-center justify-center flex-col content-center items-center">
                    <h2 className="font-bold">Podziękowania</h2>
                    <p className="text-center pl-64 pr-64">{project.thanks}</p>
                </div>
                <PhotoGallery images={project.moreImages}/>
            </div>
        </>
    )
}