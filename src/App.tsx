import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Contact, Home, Menu, ArticleDetail, Login, Register, CreateArticle, MyArticles, NotFound } from './components';
import { ThemeProvider } from "react-switch-theme";
import { colors, activeMode } from './styles/variables';
import { PrivateRoute } from './guards';

function App() {
    return (
        <ThemeProvider colors={colors} activeMode={activeMode}>
            <Router>
                <div className="app">
                    <Menu />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route exact path={["/home", "/"]} component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/article/:id" component={ArticleDetail} />
                        <PrivateRoute path="/create-article" component={CreateArticle} exact={false} />
                        <PrivateRoute path="/my-articles" component={MyArticles} exact={false} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider >
    )
}
export default App;