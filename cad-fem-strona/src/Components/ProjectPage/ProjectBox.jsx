import LinkerButton from "../AboutUsPage/LinkerButton"
import "./projectBox.css"

export default function ProjectBox({title, image, desc})
{
    return (
        <div className="projectDiv">
            <img src={image} />

            <div className="projectTexts">
                <h1>{title}</h1>
            </div>
            <hr/>
            <div className="description">
                <p>{desc}</p>
            </div>
            <LinkerButton className="linkerButton" text="Przeczytaj" linkTo="AboutUs"></LinkerButton>
        </div>
    )
}