import './About.scss';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { useEffect } from 'react';

function About(props: any) {
    const dispatch = useDispatch();
    const { articles, size } = useSelector((state: RootState) => state.articleReducers);

    useEffect(() => {dispatch(searchArticles("xbox",0,10)) }, [dispatch])

    return (
        <div className="About">
            <h1>About</h1>
            {articles.map((article, i)=>(
                <h1>{article.title}</h1>
            ))}
            <h1>{size!}</h1>
        </div>
    )
}

export default About;