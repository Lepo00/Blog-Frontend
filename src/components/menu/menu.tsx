import '../../App.scss';
import { Link } from 'react-router-dom';

// function to set a given theme/color-scheme
function setTheme(themeName:any) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();

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
                <li onClick="toggleTheme()"><button id="switch">Switch</button></li>
            </ul>
        </div>
    )
}
export default Menu;