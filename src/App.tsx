import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Posts from './components/post/Post';
import Login from './components/login/Login';
import Register from './components/register/Register';
//@ts-ignore
import { ThemeProvider} from "react-switch-theme";
import {colors, activeMode} from './styles/variables';

function App() {
    return (
        <ThemeProvider colors={colors} activeMode={activeMode}>
            <Router>
                <div className="app">
                    <Menu />
                    <Switch>
                        <Route exact path={["/home", "/"]} component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/post/:id" component={Posts} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider >
    )
}
export default App;