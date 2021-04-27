import './ItemAdmin.scss';
import { Article } from '../../../../models';
import { Row, Col, Typography, Tooltip, Button, Divider } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
const { Paragraph, Title } = Typography;

const ItemAdmin = (article: Article) => {
  return (
    <div className="ItemAdmin">
      <div className="grid-container">
        <Row wrap={false} align="middle">
          <Col flex="20%" className="img">
            <img src="http://localhost:8080/blog/image/display/1" alt="" />
          </Col>
          <Col flex="auto" className="text">
            <Title level={3} ellipsis={true}>{article.title}</Title>
            <Paragraph ellipsis={{ rows: 3, expandable: false }}>
              {article.text}
            </Paragraph>
          </Col>
          <Divider type="vertical" />
          <Col flex="10%" className="buttons">
            <Tooltip title="Pubblica articolo">
              <Button type="primary" shape="circle" size="large" icon={<CheckOutlined />} />
            </Tooltip>
            <Tooltip title="Contrassegna articolo come spam" color="red">
              <Button type="primary" danger shape="circle" size="large" icon={<CloseOutlined />} />
            </Tooltip>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ItemAdmin;