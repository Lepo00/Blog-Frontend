import './App.scss';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import About from './components/about/about';
import Menu from './components/menu/menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './components/post/post';

function App() {
    return (
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
    )
}
export default App;