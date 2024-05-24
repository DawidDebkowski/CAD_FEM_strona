import React from "react"
function Person({ name, lastName, description, imageSource }) {
    return (
        <>
            <div className="person">
                <img src={imageSource} alt={name} />
                <h2>{name} {lastName}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Person