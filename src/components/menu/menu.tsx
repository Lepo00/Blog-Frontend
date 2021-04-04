import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import { useContext } from 'react';
//@ts-ignore
import { Theme } from "react-switch-theme";

function Menu() {
    // eslint-disable-next-line
    const [theme, toogleTheme] = useContext(Theme);
    function toggleTheme() {
        toogleTheme();
    }
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
                    <li><Switch defaultChecked onChange={toggleTheme} /></li>
                </ul>
            </div>
    )
}
export default Menu;