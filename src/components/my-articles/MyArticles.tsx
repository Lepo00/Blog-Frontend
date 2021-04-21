import './MyArticles.scss';
import { Button, Tooltip, Pagination } from 'antd';
import { DeleteOutlined, SearchOutlined, FormOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteArticle, myArticles, myArticlesSize } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { Article } from '../../models';
import { Link } from 'react-router-dom';


const MyPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myArticles(0, 10));
    dispatch(myArticlesSize())
  }, [dispatch]);
  const { articles } = useSelector((state: RootState) => state.articleReducers);
  const { size } = useSelector((state: RootState) => state.articleReducers);
  articles.sort((a, b) => { return b.id! - a.id! });

  function pageChange(page: any, pageSize: any) {
    dispatch(myArticles(page-1, pageSize));
  }

  function img(article: Article) {
    const id = article?.image?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "./assets/no-image.png";
  }

  function removeArticle(id:number){
    dispatch(deleteArticle(id));
    dispatch(myArticles(0, 10));
  }

  return (
    <div className="MyPosts">
      <h1>I miei articoli</h1>
      {articles.map((article, index) => (
        <div className="grid-container" key={index}>
          <div className="image">
            <img src={img(article)} alt="" />
          </div>
          <div className="title">
            <h2>{article.title}</h2>
          </div>
          <div className="buttons">
            <Link to={"/article/" + article.id}>
              <Tooltip title="Dettaglio articolo">
                <Button shape="circle" size="large" icon={<SearchOutlined />} />
              </Tooltip>
            </Link>
            <Tooltip title="Modifica Articolo">
              <Button type="primary" shape="circle" size="large" icon={<FormOutlined />} />
            </Tooltip>
            <Tooltip title="Elimina articolo" color="red">
              <Button onClick={()=>removeArticle(article.id!)} type="primary" danger shape="circle" size="large" icon={<DeleteOutlined />}/>
            </Tooltip>
          </div>
        </div>
      ))}
      <Pagination total={size} showSizeChanger onChange={pageChange}
        showTotal={(total, range) => `${range[0]}-${range[1]} di ${total} articoli`}
        pageSizeOptions={['5', '10', '15', '20']} />
    </div>
  )
}

export default MyPosts;