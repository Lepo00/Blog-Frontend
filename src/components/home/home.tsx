import './Home.scss';
import Card from '../ui/cards/normal/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/reducers';
import { getFirstArticles } from '../../store/actions';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getFirstArticles()) }, [dispatch])
    const { articles } = useSelector((state: RootState) => state.articleReducers);

    return (
        <div className="Home">
            <div className="grid-container">
                {articles.map((article, i) => (
                    <div className={'div' + (i + 1)} key={(i + 1)}>
                        <Card article={article} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;