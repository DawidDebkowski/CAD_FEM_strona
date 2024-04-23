import "./header.css"
import {Link} from "react-router-dom"

function Header()
{
    function switchDocument(input)
    {
        document.location = input
    }
    return(
        <section id="naglowek">
            <div id="nagl">
                <div id="zdjecie_n">
                    <Link to={"/Home"}>
                        <img src="./LOGO.png" alt="brak zdj logo" />
                    </Link>
                </div>
                <div id="przyciski">
                    <button className="navButton" onClick={()=>{switchDocument("Aktualności")}}>Aktualności</button>
                    <button className="navButton" onClick={()=>{switchDocument("Projects")}}>Projekty</button>
                    <button className="navButton" onClick={()=>{switchDocument("sposor")}}>Sponsorzy</button>
                    <button className="navButton" onClick={()=>{switchDocument("AboutUs")}}>O Nas</button>
                    <button className="navButton" onClick={()=>{switchDocument("kontak")}}>Kontakt</button>
                </div>
            </div>
        </section>
    )
}
export default Header;