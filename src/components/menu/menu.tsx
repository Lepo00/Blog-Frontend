import './Menu.scss';
//import { Link } from 'react-router-dom';
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
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="#0">Home</a></li>
                <li className="menu-item"><a href="#0">About</a></li>
                <li className="menu-item">
                    <a href="#0">Widgets</a>
                    <ol className="sub-menu">
                        <li className="menu-item"><a href="#0">Big Widgets</a></li>
                        <li className="menu-item"><a href="#0">Bigger Widgets</a></li>
                        <li className="menu-item"><a href="#0">Huge Widgets</a></li>
                    </ol>
                </li>
                <li className="menu-item">
                    <a href="#0">Kabobs</a>
                    <ol className="sub-menu">
                        <li className="menu-item"><a href="#0">Shishkabobs</a></li>
                        <li className="menu-item"><a href="#0">BBQ kabobs</a></li>
                        <li className="menu-item"><a href="#0">Summer kabobs</a></li>
                    </ol>
                </li>
                <li className="menu-item"><a href="#0">Contact</a></li>
                <li className="menu-item">
                    <Switch
                        checkedChildren={
                            <span className="material-icons">dark_mode</span>
                        }
                        unCheckedChildren={
                            <span className="material-icons">light_mode</span>
                        }
                        defaultChecked
                        onChange={toggleTheme}
                    /></li>
            </ol>
        </nav>
    )
}
export default Menu;