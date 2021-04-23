import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Contact, Home, Menu, ArticleDetail, Login, Register, CreateArticle,
         MyArticles, NotFound, Profile, EditProfile, Category, Search, EditArticle } from './components';
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
                        <Route exact path={["/home", "/"]} component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/article/:id" component={ArticleDetail} />
                        <Route path="/category/:category" component={Category} />
                        <Route path="/search/:search" component={Search} />
                        <PrivateRoute path="/login" component={Login} already={true} />
                        <PrivateRoute path="/register" component={Register} already={true} />
                        <PrivateRoute path="/create-article" component={CreateArticle} />
                        <PrivateRoute path="/edit-article/:id" component={EditArticle} />
                        <PrivateRoute path="/my-articles" component={MyArticles} />
                        <PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/edit-profile" component={EditProfile} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider >
    )
}
export default App;