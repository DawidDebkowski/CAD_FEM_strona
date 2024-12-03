// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import LinkerButton from "../../LinkerButton.jsx";

interface Props {
    title: string;
    image: string;
    desc: string;
    linkTo: string;
    isRight?: boolean;
}

export default function ProjectBox({ title, image, desc, linkTo, isRight = false }: Props) {
    let baseDirection = "float-left mr-4";
    let buttonDir = "float-right ml-4";
    if (isRight) {
        baseDirection = "float-right ml-4"
        buttonDir = "float-left mr-4"
    }

    return (
        <>
            <div className="mt-2 p-0.5 w-4/5 bg-white">
                <img className={"w-2/5 h-1/5 " + baseDirection} src={image} alt={"fota"}/>
                <div className="text-left font-bold text-xl pb-2">
                    <h1>{title}</h1>
                </div>
                <hr/>
                <div className="description text-wrap">
                    <p>{desc}</p>
                </div>
                <LinkerButton text="Więcej" linkTo={linkTo} moreClasses={buttonDir}/>
            </div>
        </>
    )
}