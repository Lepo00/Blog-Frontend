import './Category.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesByCategory } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { FlipCard } from '../ui';
import { Row, Col, Pagination } from 'antd';

const Category = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(articlesByCategory(props.match.params.category, 0, 8)) }, [dispatch, props])
  const { articles, size } = useSelector((state: RootState) => state.articleReducers);

  function changePage(page: number) {
    dispatch(articlesByCategory(props.match.params.category, page-1, 8));
  }

  return (
    <div className="Category">
      <h1>{props.match.params.category}</h1>
      <div className="grid-container">
        <Row gutter={{ xs: 9, sm: 18, md: 27, lg: 36 }}>
          {articles.map((article, i) => (
            <Col key={i} xs={24} sm={12} md={8} lg={6} xl={6} >
              <FlipCard article={article} />
            </Col>
          ))}
        </Row>
        <Pagination onChange={changePage} defaultCurrent={1} total={size} defaultPageSize={8}/>
      </div>
    </div >
  )
}

export default Category;