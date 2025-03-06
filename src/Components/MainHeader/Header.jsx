import "./header.css"
import { NavLink } from "react-router-dom"
import { myRoutes } from "../../App"
import { useState } from "react"

function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <section id="header">
            <nav className="headerWrapper">
                <div className="headerImage">
                    <NavLink to={"/Home"} className="navLogoButton">
                        <img src="/zdjecia/logos/LOGO.png" alt="brak zdj logo" />
                    </NavLink>
                    <div className={"menu " + (isOpen ? "open" : "")} onClick={() => {
                        setOpen(!isOpen)
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={"navBar " + (isOpen ? "open" : "")} >
                    <NavLink to={myRoutes.dom} className="navButton">Strona Główna</NavLink>
                    {/*<NavLink to={myRoutes.aktualnosci} className="navButton">Aktualności</NavLink>*/}
                    <NavLink to={myRoutes.projekty} className="navButton">Projekty</NavLink>
                    <NavLink to={myRoutes.oNas} className="navButton">O Nas</NavLink>
                    {/*<NavLink to={myRoutes.sponsorzy} className="navButton">Sponsorzy</NavLink>*/}
                    <NavLink to={myRoutes.kontakt} className="navButton">Kontakt</NavLink>
                </div>
            </nav>
        </section>
    )
}
export default Header;