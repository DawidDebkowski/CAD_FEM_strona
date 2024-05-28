import NewsBox from "./NewsBox";
import "./newsHolder.css"

function NewsHolder({ allNews }) {
    let newsList = [];
    allNews.forEach(news => {
        newsList.push(<NewsBox title={news.title} image={news.image} desc={news.desc} linkTo={news.linkTo} />)
    });

    return (
        <div className="newsHolder">
            {newsList}
        </div>
    );
}

export default NewsHolder;