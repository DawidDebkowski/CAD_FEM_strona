import SinglePost from "../Components/SinglePostPage/SinglePost";
import "./singlePostPage.css"

export class SingleProjectInfo {
    constructor(title, desc, author, date, text, moreImages) {
        this.title = title;
        this.mainDesc = desc;
        this.author = author;
        this.date = date;
        this.text = text;
        this.moreImages = moreImages;
    }
}

export default function SinglePostPage() {
    var project = new SingleProjectInfo("Tytuł Projektu, który będzie taki",
        "Prosty opis jakiś krótki podobno ale nie wiem jak krótki pewnie tak jest okej.",
        "Imie",
        "26.05.2024",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium!",
        [{
            key: 0,
            src: "/src/assets/zdjecia/hugokopter.png"
        },
        {
            key: 1,
            src: "/src/assets/zdjecia/hugokopter2.png"
        },
        {
            key: 2,
            src: "/ekipa.png"
        },
        {
            key: 3,
            src: "/src/assets/zdjecia/weWon.jpg"
        },
        {
            key: 4,
            src: "/projekt.png"
        },
        {
            key: 5,
            src: "/ekipa.png"
        },]
            
    )
return (
    <div className="singlePostPageContent">
        <SinglePost project={project} />
    </div>
)
}
