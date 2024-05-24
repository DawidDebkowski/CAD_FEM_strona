import PropTypes from "prop-types"

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
Person.propTypes = {
  description: PropTypes.string,
  imageSource: PropTypes.string,
  lastName: PropTypes.string,
  name: PropTypes.string
}
export default Person