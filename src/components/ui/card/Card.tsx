import './Card.scss';
import {Button} from 'antd';

const Card = (props: { title: string }) => {
  return (
    <div className="Card">
      <img src={"http://localhost:8080/blog/image/display/1"} alt="" />
      <div className="text">
        <h1>{props.title}</h1>
        <Button type="primary" shape="round" size="large">
          Vai all'articolo
        </Button>
        {/*293 lettere*/}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus nisl nec eros dictum, ac ultrices libero ullamcorper. Aenean sagittis vulputate dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ac hendrerit turpis. Praesent.</p>
      </div>
    </div>
  )
}

export default Card;