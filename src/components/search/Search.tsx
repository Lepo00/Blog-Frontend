import './Search.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { Row, Col, Pagination } from 'antd';
import { FlipCard } from '../ui';

const Search = (props: any) => {
  const dispatch = useDispatch();
  const { articles, size } = useSelector((state: RootState) => state.articleReducers);

  useEffect(() => { dispatch(searchArticles(props.match.params.search, 0, 8)) }, [dispatch, props]);

  function changePage(page: any) {
    dispatch(searchArticles(props.match.params.search, page - 1, 8))
  }

  return (
    <div className="Search">
      <h1>Ricerca: {props.match.params?.search}</h1>
      <div className="grid-container">
        <Row gutter={{ xs: 9, sm: 18, md: 27, lg: 36 }}>
          {articles.map((article, i) => (
            <Col key={i} xs={24} sm={12} md={8} lg={6} xl={6} >
              <FlipCard article={article} />
            </Col>
          ))}
        </Row>
        <Pagination onChange={changePage} defaultCurrent={1} total={size} defaultPageSize={8} />
      </div>
    </div>
  )
}

export default Search;