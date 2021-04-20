import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';
import { Switch } from 'antd';
import { useContext } from 'react';
import { Theme } from "react-switch-theme";
import { useLocation } from 'react-router-dom';
import { categories } from '../../models/Categories';

function Menu() {
    // eslint-disable-next-line
    const [theme, toogleTheme] = useContext(Theme);
    const path = useLocation().pathname.toLocaleLowerCase();
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
                            {categories.map((category, i) => (
                                <li className="menu-item" key={i}><Link to={"/category/" + category.name}>{category.name}</Link></li>
                            ))}
                        </ol>
                    </li>
                    <li className="menu-item">
                        <Link to="/">Articoli</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><Link to="/create-article">Crea nuovo articolo</Link></li>
                            <li className="menu-item"><Link to="/my-articles">Gestisci i miei articoli</Link></li>
                        </ol>
                    </li>
                    <li className="menu-item">
                        <Link to="/">Profilo</Link>
                        <ol className="sub-menu">
                            <li className="menu-item"><Link to="/ww">Il mio profilo</Link></li>
                            <li className="menu-item"><Link to="/aa">Logout</Link></li>
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
            </nav>
        )
    }
}
export default Menu;