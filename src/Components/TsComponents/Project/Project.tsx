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
            <div className="w-4/5 bg-white">
                <div className="p-5">
                    <img src="/mechanicy.png" alt="głowne zdjęcie postu" className="w-full h-72 rounded object-cover"/>
                    <div className="text-center pb-5">
                        <h1 className="m-2.5 text-4xl font-bold">{project.title}</h1>
                        <p className="text-center">{project.description}</p>
                    </div>
                    <ProjectPhotoHolder alternating={true} paragraphs={project.paragraphs}/>
                    <p className="text-m font-bold leading-7 text-center">
                        Projekt wykonany we współpracy z kołem naukowym Kompozytywni.
                    </p>
                    <SponsorLogos/>
                </div>
                <div className="text-center">
                    <h2 className="font-bold">Podziękowania</h2>
                    <p>Dziękujemy sponsorom i nauczycielom i wgl kazdemu dzieki
                    </p>
                </div>
                <PhotoGallery images={project.moreImages}/>
            </div>
        </>
    )
}