import PropTypes from "prop-types"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "./photoGallery.css"

function PhotoGallery({images}) {
    let maxNumber = 4;

    return (
        <PhotoProvider>
            <div className="photoGalleryBox">
                {images.map((image) => (
                    <PhotoView key={image.key} src={image.src}>
                        <img src={image.src} alt="" className={"galleryImage " + ((image.key < maxNumber) ? "" : "hiddenPhoto")} />
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