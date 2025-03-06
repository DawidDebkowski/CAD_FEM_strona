// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import {sponsor} from "../../../models/types";

type SponsorLogosProps = {
    sponsors: sponsor[];
};

export default function SponsorLogos({ sponsors }: SponsorLogosProps) {
    return (
        <div className="mt-8 mb-8 text-center">
            <h2 className="pb-2 text-xl">Sponsorzy</h2>
            <div className="flex justify-center items-center gap-5">
                {sponsors.map((sponsor) => (
                    <img key={sponsor.key} src={sponsor.imagePath} className="w-40 h-40" />
                ))}
            </div>
        </div>
    );
}