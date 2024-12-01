import { sponsor } from "../models/types";

export const useMockSponsors = () => {
    const data = [
        {
            "key": 0,
            "name": "Red Bull",
            "imagePath": "/zdjecia/redbullMock.jpg"
        },
        {
            "key": 1,
            "name": "Red Bull2",
            "imagePath": "/zdjecia/redbullMock2.jpg"
        }
    ];

    return JSON.parse(JSON.stringify(data)) as sponsor[];
}