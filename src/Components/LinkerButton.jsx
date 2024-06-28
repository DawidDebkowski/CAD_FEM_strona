import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./linkerButton.css"

export default function LinkerButton({ text, linkTo, moreClasses }) {
    return (
        <>
            <Link to={linkTo} className={"linkerButton btn " + moreClasses}>{text}</Link>
        </>
    )
}
LinkerButton.propTypes = {
    text: PropTypes.string,
    linkTo: PropTypes.string,
    moreClasses: PropTypes.string,
}