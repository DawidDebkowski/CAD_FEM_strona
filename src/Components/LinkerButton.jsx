import { Link } from "react-router-dom";

export default function LinkerButton({ text, linkTo, moreClasses }) {
    return (
        <div>
            <Link to={linkTo}>
                <button className={"btn " + moreClasses}>{text}</button>
            </Link>
        </div>
    )
}