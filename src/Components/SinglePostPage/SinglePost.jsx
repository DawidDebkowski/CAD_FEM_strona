import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="/mechanicy.png" alt="głowne zdjęcie postu" className="singlePostImg"/>
                <h1 className="singlePostTitle">Tytuł Projektu</h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Autor: <b>Imie</b>
                    </span>
                    <span className="singlePostDate">
                        26.05.2024
                    </span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam sequi corporis quae nam, id tenetur, accusantium assumenda 
                    aliquid mollitia temporibus obcaecati sapiente quas quasi? 
                    Delectus ducimus earum aperiam dolor provident!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam sequi corporis quae nam, id tenetur, accusantium assumenda 
                    aliquid mollitia temporibus obcaecati sapiente quas quasi? 
                    Delectus ducimus earum aperiam dolor provident!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam sequi corporis quae nam, id tenetur, accusantium assumenda 
                    aliquid mollitia temporibus obcaecati sapiente quas quasi? 
                    Delectus ducimus earum aperiam dolor provident!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam sequi corporis quae nam, id tenetur, accusantium assumenda 
                    aliquid mollitia temporibus obcaecati sapiente quas quasi? 
                    Delectus ducimus earum aperiam dolor provident!
                </p>
            </div>
        </div>
    )
}