import './Category.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesByCategory } from '../../store/actions';
import { RootState } from '../../store/reducers';

const Category = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(articlesByCategory(props.match.params.category,0,2))}, [dispatch, props])
  const {articles} = useSelector((state:RootState) => state.articleReducers);
  return (
    <div className="Category">
      <h1>Category {props.match.params.category}</h1>
      {articles.map((article, i)=>(
        <h2 key={i}>{article.id}</h2>
      ))}
    </div>
  )
}

export default Category;