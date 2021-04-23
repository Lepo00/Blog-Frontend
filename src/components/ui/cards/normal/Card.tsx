import './Card.scss';
import { Button } from 'antd';
import { Article } from '../../../../models';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const Card = (props: { article: Article }) => {
  function img() {
    const id = props.article?.image?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "../assets/no-image.png";
  }
  return (
    <div className="Card">
      <Link to={"/article/" + (props.article.id)}>
        <img src={img()} alt="" />
        <div className="text">
          <h1>{props.article.title}</h1>
          {/*293 lettere*/}
          <p>{props.article.text}</p>
          <Button type="primary" shape="circle" size="large">
          <SearchOutlined style={{"fontSize":"25px"}}/>
        </Button>
        </div>

      </Link>
    </div>
  )
}

export default Card;