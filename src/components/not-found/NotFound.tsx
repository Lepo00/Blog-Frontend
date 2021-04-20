import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="main">
        <h1>404</h1>
        <p>Sembra che tu ti sia perso...</p>
        <Link to="/home">
          <button type="button">Torna alla Home</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound;