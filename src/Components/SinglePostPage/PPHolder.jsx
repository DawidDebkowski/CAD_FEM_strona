import PropTypes from "prop-types"
import PP from "./PP.jsx";
import "./ppHolder.css"
import { PhotoProvider } from "react-photo-view";

export default function PPHolder({ paragraphs, alternating = false }) {
    let paragraphList = [];
    let side = false;
    paragraphs.forEach(paragraph => {
        paragraphList.push(<PP key={paragraph.key} imageDesc={paragraph.imageDesc} image={paragraph.image} desc={paragraph.desc} isRight={side} />)
        if (alternating) {
            side = !side;
        }
    });
    return (
        <div className="ppHolder">
            <PhotoProvider>
                {paragraphList}
            </PhotoProvider>
        </div>
    )
}
PPHolder.propTypes = {
    alternating: PropTypes.bool,
    paragraphs: PropTypes.array
}