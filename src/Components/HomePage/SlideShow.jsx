import PropTypes from "prop-types"
import { Fade } from 'react-slideshow-image'

function SlideShow({ images, size }) {
    const divArray = [];

    for(var i=0;i<size;i++) {
        divArray.push(
            <div className='each-slide'>
                <img src={images[i]}/>
            </div>
        )
    }

    return (
        <div className="slideshow-container">
            <Fade>
                {divArray}
            </Fade>
        </div>
    );
}

SlideShow.propTypes = {
  images: PropTypes.array,
  size: PropTypes.number
}

export default SlideShow;

// const images = [
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
// ];