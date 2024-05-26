import './homePage.css'
import SlideShow from "../Components/HomePage/SlideShow.jsx";
import 'react-slideshow-image/dist/styles.css'
import ProjectsHolder from "../Components/ProjectsPage/ProjectsHolder.jsx";
import { Link } from "react-router-dom";
import { myRoutes } from "../App.jsx";

const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

export default function HomePage() {
    //window.location.href = "/home.html";
    return (
        <>
            <link rel="icon" type="image/ico" href="./favicon.ico" />
            <section id="slideshow">
                <SlideShow images={images} />
            </section>
            <br />
            <section id="onessec">
                <div id="onasdiv">
                    <ProjectsHolder alternating={true} projects={[{
                        title: "Trochę o CAD/FEM",
                        image: "mechanicy.png",
                        linkTo: "/AboutUs",
                        desc: "Nasze koło naukowe działa na Wydziale Mechanicznym Politechniki Wrocławskiej pod opieką dr. hab. inż. Damiana Derlukiewicza. Jesteśmy młodym zespołem skupiającym osoby zainteresowane zgłębianiem wiedzy w zakresie komputerowego modelowania 3D oraz analiz wytrzymałościowych. Obecnie jesteśmy skupieni na rozszerzaniu naszych umiejętności projektowania oraz modelowania 3D w programie Autodesk Inventor."
                    },
                    {
                        title: "Dołącz do Nas!",
                        image: "mechanicy.png",
                        linkTo: "/Kontakt",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra."
                    }
                    ]} />
                </div>
            </section>

            <section id="stopkasec">
                <div id="stopkadiv" className="content">
                    <div id="stpkl">
                        <Link to={myRoutes.kontakt}> Kontakt </Link>
                    </div>
                    <div id="stpkp">
                        <h5>Stronę stworzył: Dawid Dębkowski</h5>
                    </div>
                </div>
            </section>
        </>
    )
}