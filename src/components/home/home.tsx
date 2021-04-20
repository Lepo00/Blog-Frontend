import './Home.scss';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/reducers';
import { getFirstArticles } from '../../store/actions';
import { Article } from '../../models';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getFirstArticles(7)) }, [dispatch])
    const articles: Article[] = useSelector((state: RootState) => state.articleReducers).articles;

    return (
        <div className="Home">
            <div className="grid-container">
                {articles.map((article, i) => (
                    <div className={'div' + (i + 1)} key={(i + 1)}>
                        <Link to={"article/" + (article.id)}>
                            <Card article={article}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;