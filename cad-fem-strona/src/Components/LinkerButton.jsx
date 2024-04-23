import {Link } from "react-router-dom";

export default function LinkerButton({text, linkTo})
{
    return (
        <div>
            <Link to={linkTo}> 
                <button className="btn">{text}</button>
            </Link>
        </div>
    )
}