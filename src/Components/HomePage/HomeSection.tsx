// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import LinkerButton from "../LinkerButton.jsx"

interface Props {
    title: string;
    image: string;
    desc: string;
    linkTo: string;
    isRight?: boolean;
}

export default function ProjectBox({ title, image, desc, linkTo, isRight = false }: Props) {
    let baseDirection = "float-left mr-7";
    let buttonDir = "float-right ml-7";
    if (isRight) {
        baseDirection = "float-right ml-7"
        buttonDir = "float-left mr-7"
    }

    return (
        <>
            <div className="bg-white">
                <img className={"w-5/12 object-contain " + baseDirection} src={image} alt={"zdjęcie całego cadfem"}/>
                <div className="text-left font-bold text-2xl pb-3 pt-4">
                    <h1>{title}</h1>
                </div>
                <hr/>
                <div className="description text-wrap text-2xl pt-2">
                    <p>{desc}</p>
                </div>
                <LinkerButton text="Więcej" linkTo={linkTo} moreClasses={buttonDir}/>
            </div>
        </>
    )
}