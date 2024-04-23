import React from "react";
import Header from "../Components/MainHeader/Header.jsx";
import ReactDOM from 'react-dom/client'
import './homePage.css'
import SlideShow from "../Components/HomePage/SlideShow";
import 'react-slideshow-image/dist/styles.css'

const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

export default function HomePage()
{
    //window.location.href = "/home.html";
    return (
    <>
    <Header/>
    <section id="slideshow">
        <SlideShow images={images}/>
    </section>
    <section id="onessec">
        <div id="onasdiv">
            <div id="gora">
                <p class="tekst">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officiis quos iusto ad culpa illo ea recusandae ipsum magni deleniti? Quisquam dolore error eveniet officia magni suscipit placeat nisi quia.</p>
                <img id="zdj" src="mechanicy.png" alt="o_nas_zdj"/>
            </div>
        </div>
    </section>

    <section id="stopkasec">
        <div id="stopkadiv" class="content">
            <div id="stpkl">
                <h3>Kontakt:</h3>
            </div>
            <div id="stpkp">
                <h5>Stronę stworzył: Dawid Dębkowski i Bogusz Kwiatkowski</h5>
            </div>
        </div>
    </section>
    </>
    )
}