import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Contact, Home, Menu, PostDetail, Login, Register, CreatePost } from './components';
//@ts-ignore
import { ThemeProvider } from "react-switch-theme";
import { colors, activeMode } from './styles/variables';

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
                        <Route path="/post/:id" component={PostDetail} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/create-post" component={CreatePost} />
                        <Route path="*" component={Home} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider >
    )
}
export default App;