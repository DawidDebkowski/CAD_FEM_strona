import PropTypes from "prop-types"
import "./ppHolder.css"

export default function PP({ imageDesc, image, desc, isRight = false }) {
    let baseDirection = " left";
    if (isRight) {
        baseDirection = " right"
    }

    return (
        <div className={"ppDiv "}>
            <div className={"ppImageBox" + baseDirection}>
                <img src={image} />
                <p>Jednozdaniowy opis i fajnie</p>
            </div>

            <div className="ppDescription">
                <p>{desc}</p>
            </div>
        </div>
    )
}

PP.propTypes = {
  desc: PropTypes.string,
  image: PropTypes.string,
  imageDesc: PropTypes.string,
  isRight: PropTypes.bool
}