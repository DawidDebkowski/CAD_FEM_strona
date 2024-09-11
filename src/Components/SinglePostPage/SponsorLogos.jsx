import sponsorMock from "./../../assets/sponsor_mock.json"
import "./sponsorLogos.css"

export class Sponsor {
    constructor(name, logoPath) {
        this.name = name;
        this.logoPath = logoPath;
    }
}

function SponsorLogos() {
    let logoWheel = [];
    sponsorMock.forEach(sponsor => {
        logoWheel.push((
            <img src={sponsor.imagePath} className="sponsorLogo"/>
        ))
    });
    return ( 
        <div className="sponsorBox">
            <h2>Sponsorzy</h2>
            <div className="sponsorLogosBox">
                {logoWheel}
            </div>
        </div>
     );
}

export default SponsorLogos;