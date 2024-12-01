import { PhotoView } from "react-photo-view";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";

interface Props {
    key: number;
    imageDesc: string;
    image: string;
    desc: string;
    isRight?: boolean;
}

export default function ProjectPhoto({ imageDesc, image, desc, isRight = false }: Props) {
    let baseDirection = "float-left ml-4 pe-5";
    if (isRight) {
        baseDirection = "float-right mr-4 ps-5";
    }

    const imageBox = (
        <PhotoView src={image}>
            <div className={"flex flex-col text-center cursor-pointer w-2/5 h-full " + baseDirection}>
                <img src={image}  alt={imageDesc}/>
                <p>{imageDesc}</p>
            </div>
        </PhotoView>
    )

    let hasImage = true;
    if (image == "") {
        hasImage = false;
    }

    return (
        <>
            <div className="w-full mt-4">
                {hasImage ? imageBox : false}

                <div className="text-justify text-2xl leading-6">
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}