import "./header.css"

function Header()
{
    function switchDocument(input)
    {
        document.location = input
    }
    return(
        <section id="naglowek">
            <div id="nagl" className="content">
                <div id="zdjecie_n">
                    <img src="./LOGO.png" alt="brak zdj logo" />
                </div>
                <div id="przyciski">
                    <button id="prz1" onClick={()=>{switchDocument("Aktualności")}}>Aktualności</button>
                    <button id="prz1" onClick={()=>{switchDocument("AboutUs")}}>O Nas</button>
                    <button id="prz1" onClick={()=>{switchDocument("Projects")}}>Projekty</button>
                    <button id="prz1" onClick={()=>{switchDocument("sposor")}}>Sponsorzy</button>
                    <button id="prz1" onClick={()=>{switchDocument("kontak")}}>Kontakt</button>
                </div>
            </div>
        </section>
    )
}
export default Header;