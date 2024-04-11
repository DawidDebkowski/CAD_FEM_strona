import "./projectBox.css"

export default function ProjectBox({title, image, desc})
{
    return (
        <div className="projectDiv">

                <img src={image} />

            <div className="projectTexts">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}