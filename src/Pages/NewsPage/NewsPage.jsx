import NewsHolder from "../../Components/NewsPage/NewsHolder";
import "./newsPage.css"
import { projects } from "../ProjectsPage";

export default function NewsPage() {
    return (
        <div className="newsPage">
            <NewsHolder allNews={projects} />
        </div>
    )
}