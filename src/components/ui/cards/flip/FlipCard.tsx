import './FlipCard.scss';
import { Button, Skeleton } from 'antd';
import { Article } from '../../../../models';
import { Link } from 'react-router-dom';

const FlipCard = (props: { article: Article }) => {
  function img() {
    const id = props.article?.image?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "../assets/no-image.png";
  }
  return (
    <div className="FlipCard">
      <Link to={"/article/" + (props.article.id)}>
        <div className="flip-card">
          {props.article.title ?
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h1 className="title">{props.article.title}</h1>
                <img src={img()} alt="" />
              </div>
              <div className="flip-card-back">
                <div className="text">
                  <h1>{props.article.title}</h1>
                  <p>{props.article.text}</p>
                </div>
                <Button type="primary" shape="round" size="large">
                  Vai all'articolo
            </Button>
              </div>
            </div>
            : <Skeleton active />}
        </div>
      </Link>
    </div >
  )
}

export default FlipCard;