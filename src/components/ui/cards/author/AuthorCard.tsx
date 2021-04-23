import  {User}  from '../../../../models';
import './AuthorCard.scss';

const AuthorCard = (props:{author?:User}) => {

  return (
    <div className="AuthorCard">
      <div className="photo">
        <img src="https://i.stack.imgur.com/34AD2.jpg" alt="" />
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