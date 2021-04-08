import './Menu.scss';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import { useContext } from 'react';
//@ts-ignore
import { Theme } from "react-switch-theme";
import { useLocation } from 'react-router-dom';

function Menu(props: any) {
    // eslint-disable-next-line
    const [theme, toogleTheme] = useContext(Theme);
    function toggleTheme() {
        toogleTheme();
    }
    if (useLocation().pathname === "/login" || "/register") {
        return null;
    }
    else {
        return (
            <nav className="menu">
                <ol>
                    <li className="menu-item"><Link to="/home">Home</Link></li>
                    <li className="menu-item"><Link to="/About">Chi sono</Link></li>
                    <li className="menu-item">
                        <Link to="">Categorie</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><Link to="">Smartphone</Link></li>
                            <li className="menu-item"><Link to="">Tablet</Link></li>
                            <li className="menu-item"><Link to="">Computer</Link></li>
                            <li className="menu-item"><Link to="">Finanza</Link></li>
                        </ol>
                    </li>
                    <li className="menu-item">
                        <Link to="">Kabobs</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><Link to="">Shishkabobs</Link></li>
                            <li className="menu-item"><Link to="">BBQ kabobs</Link></li>
                        </ol>
                    </li>
                    <li className="menu-item"><Link to="">Contattami</Link></li>
                    <li className="menu-item search">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
                        <form className="form">
                            <input type="search" className="input" />
                            <i className="fa fa-search"></i>
                        </form>
                    </li>
                    <li className="menu-item toggle-theme">
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
            </nav >
        )
    }
}
export default Menu;