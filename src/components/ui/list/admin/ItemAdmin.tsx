import './ItemAdmin.scss';
import { Article } from '../../../../models';
import { Row, Col, Typography, Tooltip, Button, Divider } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteArticle, pendingArticles } from '../../../../store/actions';
import { ButtonShape, ButtonSize, ButtonType } from 'antd/lib/button';
import { Link } from 'react-router-dom';
const { Paragraph, Title } = Typography;

const ItemAdmin = (article: Article) => {
  const style: { type: ButtonType, shape: ButtonShape, size: ButtonSize } = { type: "primary", shape: "circle", size: "large" };

  const dispatch = useDispatch();

  function removeArticle(id: number) {
    Promise.resolve(
      dispatch(deleteArticle(id)))
      .then(() => dispatch(pendingArticles()));
  }

  return (
    <div className="ItemAdmin">
      <div className="grid-container">
        <Row wrap={false} align="middle">
          <Col flex="20%" className="img">
            <Link to={"/article/" + article.id}>
              <img src={"http://localhost:8080/blog/image/display/" + article.id} alt="" />
            </Link>
          </Col>
          <Link to={"/article/" + article.id}>
            <Col flex="auto" className="text">
              <Title level={3} ellipsis={true}>{article.title}</Title>
              <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                {article.text}
              </Paragraph>
            </Col>
          </Link>
          <Divider type="vertical" />
          <Col flex="10%" className="buttons">
            <Tooltip title="Pubblica articolo">
              <Button {...style} icon={<CheckOutlined />} />
            </Tooltip>
            <Tooltip title="Contrassegna articolo come spam" color="red">
              <Button danger {...style} icon={<CloseOutlined />} onClick={() => removeArticle(article.id!)} />
            </Tooltip>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ItemAdmin;