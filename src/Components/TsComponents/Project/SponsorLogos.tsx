import { useMockSponsors } from "../../../Hooks/useSponsors";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";

export default function SponsorLogos() {
    const logoWheel: Array<React.JSX.Element> = [];

    const sponsorMock = useMockSponsors();

    sponsorMock.forEach(sponsor => {
        logoWheel.push((
            <img key={sponsor.key} src={sponsor.imagePath} className="w-40 h-40"/>
        ))
    });
    return (
        <>
            <div className="mt-8 mb-8 text-center">
                <h2>Sponsorzy</h2>
                <div className="flex justify-center items-center gap-0.5">
                    {logoWheel}
                </div>
            </div>
        </>
    );
}