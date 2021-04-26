import './MyArticles.scss';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { myArticles } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { ItemCrud } from '../ui';


const MyPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(myArticles(0, 10)) }, [dispatch]);
  const { articles, size } = useSelector((state: RootState) => state.articleReducers);

  function pageChange(page: any, pageSize: any) {
    dispatch(myArticles(page - 1, pageSize));
  }

  return (
    <div className="MyPosts">
      <h1>I miei articoli</h1>
      {articles.map(article => (
        <ItemCrud article={article} />
      ))}
      <Pagination total={size} showSizeChanger onChange={pageChange}
        showTotal={(total, range) => `${range[0]}-${range[1]} di ${total} articoli`}
        pageSizeOptions={['5', '10', '15', '20']} />
    </div>
  )
}

export default MyPosts;