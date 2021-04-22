import './Category.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articlesByCategory } from '../../store/actions';
import { RootState } from '../../store/reducers';
import Card from '../ui/cards/normal/Card';
import { Row, Col } from 'antd';

const Category = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(articlesByCategory(props.match.params.category, 0, 8)) }, [dispatch, props])
  const { articles } = useSelector((state: RootState) => state.articleReducers);

  return (
    <div className="Category">
      <h1>{props.match.params.category}</h1>
      <div className="grid-container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {articles.map((article, i) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={6} >
                <Card article={article} />
            </Col>
          ))}
        </Row>
      </div>
    </div >
  )
}

export default Category;