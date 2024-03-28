function Person({name, lastName, description, imageSource})
{
    return (
        <>
             <div>              
                {/* <img src={imageSource} alt={name}> </img> */}
                <h2>{name} {lastName}</h2>                  
                <p>{description}</p>
            </div>
        </>
    )
}

export default Person