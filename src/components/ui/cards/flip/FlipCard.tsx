import './FlipCard.scss';
import { Button } from 'antd';
import { Article } from '../../../../models';
import { Link } from 'react-router-dom';

const FlipCard = (props: { article: Article }) => {
  function img() {
    const id = props.article?.image?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "../assets/no-image.png";
  }
  return (
    <div className="FlipCard">
      <Link to={"article/" + (props.article.id)}>
        <img src={img()} alt="" />
        <div className="text">
          <h1>{props.article.title}</h1>
          {/*293 lettere*/}
          <p>{props.article.text?.substring(0, 370)}</p>
          <Button type="primary" shape="round" size="large">
            Vai all'articolo
        </Button>
        </div>
      </Link>
    </div>
  )
}

export default FlipCard;