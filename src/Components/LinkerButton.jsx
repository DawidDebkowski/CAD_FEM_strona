import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function LinkerButton({ text, linkTo, moreClasses }) {
    return (
        <div>
            <Link to={linkTo}>
                <button className={"btn " + moreClasses}>{text}</button>
            </Link>
        </div>
    )
}
LinkerButton.propTypes = {
    text: PropTypes.string,
    linkTo: PropTypes.string,
    moreClasses: PropTypes.string,
}