import './AuthorCard.scss';

const AuthorCard = () => {
  return (
    <div className="AuthorCard">
      <div className="photo">
        <img src="https://i.stack.imgur.com/34AD2.jpg" alt="" />
      </div>
      <div className="name">
        <h1>Author Demo</h1>
      </div>
      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed arcu aliquet, imperdiet tellus at, sodales quam. Aliquam semper sem vel consequat blandit. Ut tempus porttitor elit vitae porta. Quisque id tempus ipsum. Suspendisse ante ipsum, lacinia efficitur est congue, imperdiet aliquam neque. Pellentesque laoreet metus vel magna efficitur, in eleifend augue lacinia. Curabitur cursus mattis congue. Ut consectetur, dui.</p>
      </div>
    </div>
  )
}

export default AuthorCard;