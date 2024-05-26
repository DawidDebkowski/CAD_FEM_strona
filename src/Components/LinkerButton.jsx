import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function LinkerButton({ text, linkTo, moreClasses }) {
    return (
        <>
            <Link to={linkTo} className={"btn " + moreClasses}>{text}</Link>
        </>
    )
}
LinkerButton.propTypes = {
    text: PropTypes.string,
    linkTo: PropTypes.string,
    moreClasses: PropTypes.string,
}