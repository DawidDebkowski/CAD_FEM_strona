import PropTypes from "prop-types"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "./photoGallery.css"

function PhotoGallery({ images }) {
    let maxNumber = 4;

    function buildImage(image) {
        let lastPhoto = ((image.key == maxNumber - 1) ? " lastPhoto" : "");
        let hiddenPhoto = ((image.key < maxNumber) ? "" : " hiddenPhoto");
        let lastPhotoText = ((image.key == maxNumber - 1) ? " lastPhotoText" : "");

        return (
            <PhotoView key={image.key} src={image.src}>
                <div className={"greyWrapper" + lastPhoto}>
                    <img src={image.src} alt="" className={"galleryImage" + hiddenPhoto + lastPhoto} />
                    <div className={"galleryTextWrapper" + hiddenPhoto + lastPhoto}>
                        {/* <p>Zobacz więcej zdjęć</p> */}
                        <h1 className={"morePhotosDisplay" + hiddenPhoto + lastPhotoText}>+4</h1>
                    </div>
                </div>
            </PhotoView>
        )
    }


    return (
        <PhotoProvider>
            <div className="photoGalleryWrapper">
                <h2>Galeria</h2>
                <div className="photoGalleryBox">
                    {images.map(buildImage)}
                </div>
            </div>
        </PhotoProvider>
    );
}

PhotoGallery.propTypes = {
    images: PropTypes.array
}

export default PhotoGallery;