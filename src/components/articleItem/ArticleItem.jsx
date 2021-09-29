const ArticleItem = (props) => {
  const { article } = props;

  return (
    <div className="card">
      <div className="card-body">
      <h4><a href={article.url} className="card-title" style={{ textDecoration: 'none' }}>{article.title}</a></h4> 
        <p className="card-text">{article.description}</p>
        <a href={article.url}>{article.source.name}</a>

      </div>
    </div>
  );
};

export default ArticleItem;
// style={{ textDecoration: 'none', color: "black" }}