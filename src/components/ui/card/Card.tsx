import './Card.scss';
import { Button } from 'antd';
import { Article } from '../../../models';

const Card = (props: { article: Article }) => {
  function img() {
      const id = props.article?.image?.id;
      return id ? "http://localhost:8080/blog/image/display/" + id : "./assets/no-image.png";
  }
  return (
    <div className="Card">
      <img src={img()} alt="" />
      <div className="text">
        <h1>{props.article.title}</h1>
        <Button type="primary" shape="round" size="large">
          Vai all'articolo
        </Button>
        {/*293 lettere*/}
        <p>{props.article.text}</p>
      </div>
    </div>
  )
}

export default Card;