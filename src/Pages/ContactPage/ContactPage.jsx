import { SocialIcon } from "react-social-icons"
import "./contactPage.css"
import { Link } from "react-router-dom"

export default function ContactPage() {
    return (
        <div className="contactPage">
            <div className="contactInfoBox">
                <h1>Zobacz co u nas:</h1>
                <div className="contactBox">
                    <Link className="instagramLink contactText" to="https://www.instagram.com/cad.fem_pwr/">Instagram</Link>
                    <SocialIcon className="contactBoxIcon" target="_blank" fallback="instagram" url="https://www.instagram.com/cad.fem_pwr/" />
                </div>
            </div>
            <div className="contactInfoBox">
                <h1>Napisz maila:</h1>
                <div className="contactBox">
                    <p className="contactText"
                        onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>
                        cadfem@pwr.edu.pl
                    </p>
                    <SocialIcon className="contactBoxIcon" target="_blank" fallback="email" url="mailto:cadfem@pwr.edu.pl" />
                </div>
            </div>
        </div>
    )
}