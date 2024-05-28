import PropTypes from "prop-types"
import "./newsBox.css"

function NewsBox({ title, image, desc }) {
    return (
        <div className="newsBox">
            <div className="newsBoxImageHolder">
                <img src={image} className="newsBoxImage" alt="zdjęcie aktualności" />
            </div>
            <div className="newsBoxTextWrapper">
                <div className="newsBoxLineHolder">
                    <hr/>
                    <span>28.05.2024</span>
                </div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}

NewsBox.propTypes = {
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default NewsBox;