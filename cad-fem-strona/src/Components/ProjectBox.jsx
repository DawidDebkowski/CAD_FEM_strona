import "./projectBox.css"

export default function ProjectBox({title, image, desc})
{
    return (
        <div className="projectDiv">
            <div className="projectTexts">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="projectImage">
                <img src={image} />
            </div>
        </div>
    )
}