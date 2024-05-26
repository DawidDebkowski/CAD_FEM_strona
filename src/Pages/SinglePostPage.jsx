import SinglePost from "../Components/SinglePostPage/SinglePost";
export class SingleProjectInfo {
    constructor(title, author, date, text) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.text = text;
    }
}

export default function SinglePostPage() {
    var project = new SingleProjectInfo("Tytuł Projektu, który będzie taki",
        "Imie",
        "26.05.2024", 
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, cupiditate ratione ad rem repellat nobis magni dignissimos inventore repudiandae atque voluptatem iure eius odio quo aspernatur magnam in non laudantium!"
    )   
    return (
        <div><SinglePost project={project}/></div>
    )
}
