import LinkerButton from "../LinkerButton"
import "./projectBox.css"

export default function ProjectBox({ title, image, desc, linkTo, isRight = false }) {
    let baseDirection = "left";
    let buttonDir = "right"
    if (isRight) {
        baseDirection = "right"
        buttonDir = "left"
    }

    return (
        <div className={"projectDiv "}>
            <img className={baseDirection} src={image} />

            <div className="projectTexts">
                <h1>{title}</h1>
            </div>
            <hr />
            <div className="description">
                <p>{desc}</p>
            </div>
            <LinkerButton text="Więcej" linkTo={linkTo} moreClasses={buttonDir}></LinkerButton>
        </div>
    )
}