import { Link } from "react-router-dom"
import "./footer.css"
import { myRoutes } from "../../App"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerSiteName">
                <img className="footerLogoImage" src="/LOGO.png" alt="logo cad/fem"/>
                <span>©2024 CAD/FEM, Dawid Dębkowski</span>
            </div>
            <div className="footerLinks">
                <Link to={myRoutes.dom} className="footerLink">Strona Główna</Link>
                <Link to={myRoutes.oNas} className="footerLink">O Nas</Link>
                <Link to={myRoutes.kontakt} className="footerLink">Kontakt</Link>
            </div>
            <div className="footerOtherLogos">
                <img className="footerLogoImage" src="/logo-w10.png" alt="logoPWR"/>
                <img className="footerLogoImage" src="/logoPWR.png" alt="logoPWR"/>
            </div>
        </div>
    )
}