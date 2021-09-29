import ArticleItem from "../articleItem/ArticleItem";

const NewsList = (props) => {
    return ( 
        <div className="card">
        {props.articles.map ((article, index) =>(
            <ArticleItem article={article} key={article.title + index}></ArticleItem>
        ))}
        </div>
     );
}
 
export default NewsList;