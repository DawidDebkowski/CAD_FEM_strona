import PropTypes from "prop-types"
import "./singlePost.css"
import PPHolder from "./PPHolder"
import paragraphs from "./../../assets/paragraphs.json"
import SponsorLogos from "./SponsorLogos"
import PhotoGallery from "./PhotoGallery"

export default function SinglePost({ project }) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="/mechanicy.png" alt="głowne zdjęcie postu" className="singlePostImg" />
                <h1 className="singlePostTitle">{project.title}</h1>
                {/* <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Autor: <b>{project.author}</b>
                    </span>
                    <span className="singlePostDate">
                        {project.date}
                    </span>
                </div> */}
                <p className="singlePostDesc">
                    {project.mainDesc}
                </p>
                <PPHolder paragraphs={paragraphs} alternating={true} />
                <p className="singlePostCoop">
                    Projekt wykonany we współpracy z kołem naukowym Kompozytywni.
                </p>
                <SponsorLogos />
                <div className="singlePostThanks">
                    <h2>Podziękowania</h2>
                    <p>Dziękujemy sponsorom i nauczycielom i wgl kazdemu dzieki
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla varius elementum massa, non u
                        Dziękujemy sponsorom i nauczycielom i wgl kazdemu dzieki 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Nulla varius elementum massa, non u
                    </p>
                </div>
                <PhotoGallery images={project.moreImages}/>
            </div>
        </div>
    )
}

SinglePost.propTypes = {
    project: PropTypes.shape({
        author: PropTypes.string,
        mainDesc: PropTypes.string,
        date: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
        moreImages: PropTypes.array
    })
}

