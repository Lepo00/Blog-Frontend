import './Menu.scss';
import { NavLink, Link, Redirect, useHistory } from 'react-router-dom';
import { Switch } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
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
    let history = useHistory();
    const [search, setSearch] = useState("");

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(search);
    }

    function searchRedirect () {
        history.push("/search/" + search);
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
                    <li className="menu-item">
                        <NavLink activeClassName="selected" to="/About">Chi sono</NavLink>
                    </li>
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
                            <input type="search" className="input"
                                onChange={(e: any) => searchChange(e)}
                                value={search} />
                            <i className="fa fa-search" onClick={searchRedirect}></i>
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