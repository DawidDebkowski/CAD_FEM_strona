import PropTypes from "prop-types"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "./photoGallery.css"

function PhotoGallery({ images }) {
    let maxNumber = 4;

    return (
        <PhotoProvider>
            <div className="photoGalleryBox">
                {images.map((image) => (
                    <PhotoView key={image.key} src={image.src}>
                        <div className={"greyWrapper " + ((image.key == maxNumber - 1) ? "lastPhoto" : "")}>
                            <img src={image.src} alt="" className={"galleryImage " + ((image.key < maxNumber) ? "" : "hiddenPhoto") + ((image.key == maxNumber - 1) ? "lastPhoto" : "")} />
                            <div className={"galleryTextWrapper " + ((image.key < maxNumber) ? "" : "hiddenPhoto") + ((image.key == maxNumber - 1) ? " lastPhoto" : "")}>
                                {/* <p>Zobacz więcej zdjęć</p> */}
                                <h1 className={"morePhotosDisplay " + ((image.key < maxNumber) ? "" : "hiddenPhoto ") + ((image.key == maxNumber - 1) ? "lastPhotoText" : "")}>+4</h1>
                            </div>
                        </div>
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    );
}

PhotoGallery.propTypes = {
    images: PropTypes.array
}

export default PhotoGallery;