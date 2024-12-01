import { PhotoProvider, PhotoView } from "react-photo-view";
import "./photoGallery.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";

interface Props {
    images: Array<{ key: number, src: string }>;
}

export default function PhotoGallery({ images }: Props) {
    const maxNumber = 4;
    const moreNumber = images.length - maxNumber;

    function buildImage(image) {
        const lastPhoto = ((image.key == maxNumber - 1) ? " lastPhoto" : "");
        const hiddenPhoto = ((image.key < maxNumber) ? "" : " hiddenPhoto");
        const lastPhotoText = (((image.key == maxNumber - 1) && (moreNumber > 0))? " lastPhotoText" : "");

        return (
            <>
                <PhotoView key={image.key} src={image.src}>
                    <div className={"greyWrapper" + lastPhoto}>
                        <img src={image.src} alt="" className={"galleryImage" + hiddenPhoto + lastPhoto} />
                        <div className={"galleryTextWrapper" + hiddenPhoto + lastPhoto}>
                            {/* <p>Zobacz więcej zdjęć</p> */}
                            <h1 className={"morePhotosDisplay" + hiddenPhoto + lastPhotoText}>{"+" + moreNumber}</h1>
                        </div>
                    </div>
                </PhotoView></>
        )
    }

    return (
        <>
            <PhotoProvider>
                <div className="photoGalleryWrapper">
                    <h2>Galeria</h2>
                    <div className="photoGalleryBox">
                        {images.map(buildImage)}
                    </div>
                </div>
            </PhotoProvider>
            );
        </>)
}