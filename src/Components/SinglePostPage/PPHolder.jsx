import PropTypes from "prop-types"
import PP from "./PP.jsx";
import "./ppHolder.css"

export default function PPHolder({ paragraphs, alternating = false }) {
    let paragraphList = [];
    let side = false;
    paragraphs.forEach(paragraph => {
        paragraphList.push(<PP title={paragraph.title} image={paragraph.image} desc={paragraph.desc} linkTo={paragraph.linkTo} isRight={side} />)
        if (alternating) {
            side = !side;
        }
    });
    return (
        <div className="ppHolder">
            {paragraphList}
        </div>
    )
}
PPHolder.propTypes = {
    alternating: PropTypes.bool,
    paragraphs: PropTypes.shape({
        forEach: PropTypes.func
    })
}