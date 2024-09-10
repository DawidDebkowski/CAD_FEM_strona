import NewsHolder from "../../Components/NewsPage/NewsHolder";
import "./newsPage.css"
import json_project from "./../../assets/projects.json"


export default function NewsPage() {
    return (
        <div className="newsPage">
            <NewsHolder allNews={json_project} />
        </div>
    )
}