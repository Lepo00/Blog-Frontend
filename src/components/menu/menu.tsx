import '../../App.scss';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <h3>Logo</h3>
            <ul className="links">
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}
export default Menu;