import PropTypes from "prop-types"
import "./singlePost.css"

export default function SinglePost({project}) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="/mechanicy.png" alt="głowne zdjęcie postu" className="singlePostImg"/>
                <h1 className="singlePostTitle">{project.title}</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Autor: <b>{project.author}</b>
                    </span>
                    <span className="singlePostDate">
                        {project.date}
                    </span>
                </div>
                <p className="singlePostDesc">
                    {project.text}
                </p>
            </div>
        </div>
    )
}

SinglePost.propTypes = {
  project: PropTypes.shape({
    author: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string
  })
}

