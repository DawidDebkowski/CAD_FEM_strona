function PP({ imageDesc, image, desc, isRight = false }) {
    let baseDirection = "left";
    if (isRight) {
        baseDirection = "right"
    }

    return (
        <div className={"projectDiv "}>
            <img className={baseDirection} src={image} />

            <div className="description">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default PP;