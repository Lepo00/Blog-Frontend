import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';
import { Switch } from 'antd';
import { useContext, useState } from 'react';
//@ts-ignore
import { Theme } from "react-switch-theme";
import { useLocation } from 'react-router-dom';

function Menu(props: any) {
    // eslint-disable-next-line
    const [theme, toogleTheme] = useContext(Theme);
    const [path] = useState(useLocation().pathname);
    if (path === "/login" || path === "/register") {
        return null;
    }
    else {
        return (
            <nav className="menu">
                <ol>
                    <li className="menu-item"><NavLink activeClassName="selected" to="/Home">Home</NavLink></li>
                    <li className="menu-item"><NavLink activeClassName="selected" to="/About">Chi sono</NavLink></li>
                    <li className="menu-item">
                        <Link to="/">Categorie</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><NavLink activeClassName="selected" to="/aa">Smartphone</NavLink></li>
                            <li className="menu-item"><NavLink activeClassName="selected" to="/bb">Tablet</NavLink></li>
                            <li className="menu-item"><NavLink activeClassName="selected" to="/cc">Computer</NavLink></li>
                            <li className="menu-item"><NavLink activeClassName="selected" to="/dd">Finanza</NavLink></li>
                        </ol>
                    </li>
                    <li className="menu-item">
                        <Link to="/">Articoli</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><Link to="/create-post">Crea nuovo articolo</Link></li>
                            <li className="menu-item"><Link to="/my-posts">Gestisci i miei articoli</Link></li>
                        </ol>
                    </li>
                    <li className="menu-item">
                        <Link to="/">Profilo</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><NavLink activeClassName="selected" to="/ww">Il mio profilo</NavLink></li>
                            <li className="menu-item"><NavLink activeClassName="selected" to="/ee">Logout</NavLink></li>
                        </ol>
                    </li>
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
                            onChange={toogleTheme}
                        /></li>
                </ol>
            </nav >
        )
    }
}
export default Menu;