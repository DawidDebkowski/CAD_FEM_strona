import "./header.css"
import { Link } from "react-router-dom"
import { myRoutes } from "../../App"

function Header() {
    return (
        <section id="header">
            <div className="headerWrapper">
                <div className="headerImage">
                    <Link to={"/Home"}>
                        <img src="/LOGO.png" alt="brak zdj logo" />
                    </Link>
                </div>
                <nav className="navBar">
                    <Link to={myRoutes.dom} className="navButton">Strona Główna</Link>
                    <Link to={myRoutes.aktualnosci} className="navButton">Aktualności</Link>
                    <Link to={myRoutes.projekty} className="navButton">Projekty</Link>
                    <Link to={myRoutes.oNas} className="navButton">O Nas</Link>
                    <Link to={myRoutes.sponsorzy} className="navButton">Sponsorzy</Link>
                    <Link to={myRoutes.kontakt} className="navButton">Kontakt</Link>
                </nav>
            </div>
            <php>
                $nazwa = 1;

                echo $nazwa
                 echo To jest test;
            </php>
        </section>
    )
}
export default Header;