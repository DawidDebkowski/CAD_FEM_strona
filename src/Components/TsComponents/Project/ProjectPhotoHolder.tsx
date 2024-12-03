import { PhotoProvider } from "react-photo-view";
import { paragraph } from "../../../models/types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import ProjectPhoto from "./ProjectPhoto";

interface Props {
    alternating: boolean;
    paragraphs: paragraph[];
}

export default function ProjectPhotoHolder( {alternating, paragraphs}: Props ) {
    const paragraphList: Array<React.JSX.Element> = [];
    let side = false;
    paragraphs.forEach(paragraph => {
        paragraphList.push(<ProjectPhoto key={paragraph.key} imageDesc={paragraph.imageDesc} image={paragraph.image} desc={paragraph.desc} isRight={side}/>)
        if (alternating) {
            side = !side;
        }
    });
    return (
        <>
            <div className="flex flex-col">
                <PhotoProvider>
                    {paragraphList}
                </PhotoProvider>
            </div>
        </>
    )
}