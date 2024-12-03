import { SocialIcon } from "react-social-icons"
import "./contactPage.css"
import { Link } from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";

export default function ContactPage() {
    return (
        <div className="contactPage">
            <div className="flex flex-col justify-center items-center bg-teal-400 m-4 p-10 rounded-3xl">
                <h1>Zobacz co u nas:</h1>
                <div className="flex items-center mt-7">
                    <Link className="hover:text-pink-500 text-4xl pr-5" to="https://www.instagram.com/cad.fem_pwr/">Instagram</Link>
                    <SocialIcon className="size-0" target="_blank" /*fallback="instagram"*/ url="https://www.instagram.com/cad.fem_pwr/" />
                </div>
            </div>
            <div className="contactInfoBox">
                <h1>Napisz maila:</h1>
                <div className="contactBox">
                    <p className="contactText"
                        onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>
                        cadfem@pwr.edu.pl
                    </p>
                    <SocialIcon className="contactBoxIcon" target="_blank" /*fallback="email"*/ url="mailto:cadfem@pwr.edu.pl" />
                </div>
            </div>
        </div>
    )
}