import './homePage.css'
import SlideShow from "../Components/HomePage/SlideShow.jsx";
import 'react-slideshow-image/dist/styles.css'
import ProjectsHolder from "../Components/ProjectsPage/ProjectsHolder.jsx";

const images = [
    "./LOGO.png",
];

export default function HomePage() {
    console.log(import.meta.env.VITE_API_LINK);
    //window.location.href = "/home.html";
    return (
        <>
            <link rel="icon" type="image/ico" href="./favicon.ico" />
            <section id="slideshow">
                <SlideShow images={images} size={images.length}/>
            </section>
            <br />
            <section id="onessec">
                <div id="onasdiv">
                    <ProjectsHolder alternating={true} projects={[{
                        title: "Trochę o CAD/FEM",
                        image: "/mechanicy.png",
                        linkTo: "/AboutUs",
                        desc: "Nasze koło naukowe działa na Wydziale Mechanicznym Politechniki Wrocławskiej pod opieką dr. hab. inż. Damiana Derlukiewicza. Jesteśmy młodym zespołem skupiającym osoby zainteresowane zgłębianiem wiedzy w zakresie komputerowego modelowania 3D oraz analiz wytrzymałościowych. Obecnie jesteśmy skupieni na rozszerzaniu naszych umiejętności projektowania oraz modelowania 3D w programie Autodesk Inventor."
                    },
                    {
                        title: "Dołącz do Nas!",
                        image: "/mechanicy.png",
                        linkTo: "/Kontakt",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius elementum massa, non ullamcorper neque malesuada ac. Pellentesque convallis ultricies mi eget aliquam. Aliquam erat volutpat. Integer fermentum vehicula sapien. Morbi placerat ullamcorper erat id euismod. Cras ullamcorper condimentum turpis ac rhoncus. Aliquam sit amet velit tortor. Integer scelerisque faucibus egestas. Phasellus posuere scelerisque mi nec molestie. Duis condimentum luctus felis ut efficitur. Maecenas enim leo, egestas a auctor ac, egestas in odio. Nunc semper leo id est scelerisque, sed faucibus nibh viverra."
                    }
                    ]} />
                </div>
            </section>
        </>
    )
}