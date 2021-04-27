import './Admin.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ItemAdmin } from '../ui';
import { RootState } from '../../store/reducers';
import { useEffect } from 'react';
import { pendingArticles } from '../../store/actions';

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(pendingArticles()) }, [dispatch]);
  const { articles } = useSelector((state: RootState) => state.articleReducers);

  return (
    <div className="Admin">
      <h1>Articoli in attesa di approvazione</h1>
      {articles?.map((article) => (
          <ItemAdmin {...article} key={article.id}/>
      ))}
    </div>
  )
}

export default Admin;