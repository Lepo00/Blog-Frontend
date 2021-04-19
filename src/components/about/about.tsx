import './About.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment,/* signin, signout,*/ getArticles } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { useEffect } from 'react';
import Article from '../../models/Article';

function About(props:any) {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counterReducers);
    const logged = useSelector((state: RootState) => state.userReducers);
    const articles: Article[] = useSelector((state: RootState) => state.articleReducers).articles;
    const loading = useSelector((state: RootState) => state.articleReducers).loading;

    useEffect(() => {dispatch(getArticles())}, [dispatch]);
    
    return (
        <div className="About">
            <h1>About</h1>
            <h4>Counter: {counter}</h4>
            {logged ? <h4>Logged</h4> : <h4>Not Logged in</h4>}
            <button onClick={() => dispatch(increment(5))}>Increase</button>
            {loading? <h1>Loading</h1>:<h1>Loaded</h1>}
            {articles.map((article)=>(
                <h1>{article.title}</h1>
            ))}
        </div>
    )
}

export default About;