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
                    <button className="navButton" onClick={()=>{switchDocument("dom")}}>Strona Główna</button>
                    <button className="navButton" onClick={()=>{switchDocument("aktualnosci")}}>Aktualności</button>
                    <button className="navButton" onClick={()=>{switchDocument("projekty")}}>Projekty</button>
                    <button className="navButton" onClick={()=>{switchDocument("sponsorzy")}}>Sponsorzy</button>
                    <button className="navButton" onClick={()=>{switchDocument("o-nas")}}>O Nas</button>
                    <button className="navButton" onClick={()=>{switchDocument("kontakt")}}>Kontakt</button>
                </div>
            </div>
        </section>
    )
}
export default Header;