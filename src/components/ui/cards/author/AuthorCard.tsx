import  {User}  from '../../../../models';
import './AuthorCard.scss';

const AuthorCard = (props:{author?:User}) => {

  function img() {
    const id = props.author?.photo?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "https://i.stack.imgur.com/34AD2.jpg";
  }

  return (
    <div className="AuthorCard">
      <div className="photo">
        <img src={img()} alt="" />
      </div>
      <div className="name">
        <h1>{props.author?.fullName}</h1>
      </div>
      <div className="description">
        <p>{props.author?.description}</p>
      </div>
    </div>
  )
}

export default AuthorCard;