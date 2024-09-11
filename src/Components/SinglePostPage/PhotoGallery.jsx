import PropTypes from "prop-types"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "./photoGallery.css"

function PhotoGallery({images}) {
    let maxNumber = 4;
    console.log(images);
    
    return (
        <PhotoProvider>
            <div className="photoGalleryBox">
                {images.map((index, src) => (
                    <PhotoView key={index} src={src}>
                        <img src={src} alt="" className={index > maxNumber ? "" : "hiddenPhoto"} />
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