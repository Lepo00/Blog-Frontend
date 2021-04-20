import './Card.scss';
import {Button} from 'antd';

const Card = (props: { title: string, img?:number, text:string }) => {
  function img(){
    return props.img ? "http://localhost:8080/blog/image/display/"+props.img : "./assets/no-image.png";
  }
  return (
    <div className="Card">
      <img src={img()} alt="" />
      <div className="text">
        <h1>{props.title}</h1>
        <Button type="primary" shape="round" size="large">
          Vai all'articolo
        </Button>
        {/*293 lettere*/}
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card;