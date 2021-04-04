import './App.scss';
import 'antd/dist/antd.css';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import About from './components/about/about';
import Menu from './components/menu/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './components/post/post';
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
                    </Switch>
                </div>
            </Router>
        </ThemeProvider >
    )
}
export default App;