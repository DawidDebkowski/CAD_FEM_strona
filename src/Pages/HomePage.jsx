import './homePage.css'
import SlideShow from "../Components/HomePage/SlideShow.jsx";
import 'react-slideshow-image/dist/styles.css'
import {useHomePageData} from "../Hooks/useProjects.ts";
import React from "react";
import HomeSection from "../Components/HomePage/HomeSection.tsx";

const images = [
    "/zdjecia/general/ekipa.png",
    "/zdjecia/general/LOGO KOLOR.png",
];

export default function HomePage() {
    const data = useHomePageData();
    const alternating = true;

    let projectList = [];
    let side = false;
    data.forEach(project => {
        projectList.push(<HomeSection title={project.title} image={project.image} desc={project.desc} linkTo={project.linkTo} isRight={side} />)
        if (alternating) {
            side = !side;
        }
    });

    return (
        <>
            <link rel="icon" type="image/ico" href="/favicon.ico" />
            <section id="slideshow">
                <SlideShow images={images} size={images.length}/>
            </section>
            <section id="onessec">
                <div id="onasdiv">
                    <div className="homeSectionHolder">
                        {projectList}
                    </div>
                </div>
            </section>
        </>
    )
}