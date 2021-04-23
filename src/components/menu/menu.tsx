import './Menu.scss';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Switch } from 'antd';
import { useContext, useState } from 'react';
import { Theme } from "react-switch-theme";
import { useLocation } from 'react-router-dom';
import { categories } from '../../models/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions';
import { isLoggedIn } from '../../guards';
import { RootState } from '../../store/reducers';

function Menu() {
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const [theme, toogleTheme] = useContext(Theme);
    const path = useLocation().pathname.toLocaleLowerCase();
    const logged = useSelector((state: RootState) => state.userReducers);

    const [search, setSearch] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRedirect(true);
        setSearch(e.target.value);
    }

    function subMenuProfile() {
        return isLoggedIn() || logged ?
            <ol className="sub-menu">
                <li className="menu-item"><Link to="/profile">Il mio profilo</Link></li>
                <li className="menu-item" onClick={() => dispatch(logout())}><Link to="/login">Logout</Link></li>
            </ol>
            :
            <ol className="sub-menu">
                <li className="menu-item"><Link to="/login">Login</Link></li>
                <li className="menu-item"><Link to="/register">Registrati</Link></li>
            </ol>
    }

    if (path.startsWith('search')) {
        setRedirect(false);
    }

    if (path === "/login" || path === "/register") {
        return null;
    }

    else {
        return (
            <nav className="menu">
                <ol>
                    <li className="menu-item">
                        <NavLink activeClassName="selected" to="/Home" className="logoa">
                            <img src={theme === "darkTheme" ? "../assets/logo-light.png" : "../assets/logo-dark.png"} alt="" />
                        </NavLink>
                    </li>
                    <li className="menu-item"><NavLink activeClassName="selected" to="/About">Chi sono</NavLink></li>
                    <li className="menu-item">
                        <Link to="/">Categorie</Link>
                        <ol className="sub-menu">
                            {categories.map((category, i) => (
                                <li className="menu-item" key={i}><Link to={"/category/" + category.value}>{category.name}</Link></li>
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
                        <Link to="/profile">Profilo</Link>
                        {subMenuProfile()}
                    </li>
                    <li className="menu-item search">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
                        <form className="form">
                            <input type="search" className="input" onChange={handleChange} />
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
                {redirect && search !== '' ? <Redirect to={"/search/" + search} /> : null}
            </nav>
        )
    }
}
export default Menu;