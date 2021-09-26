const ArticleItem = (props) => {
  const { article } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url}>{article.source.name}</a>
        {/* <button className="btn btn-primary" onClick={storyHandler}>
          Check full story
        </button> */}
      </div>
    </div>
  );
};

export default ArticleItem;
