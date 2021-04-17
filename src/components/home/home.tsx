import './Home.scss';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store/reducers';
import { getFirstArticles } from '../../store/actions/articleActions';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getFirstArticles(7)) }, [dispatch])
    const articles = useSelector((state: RootState) => state.articleReducers).articles;

    const createGrid = () => {
        let grid: JSX.Element[] = [];
        /*for (let i = 1; i < 8; i++) {
            grid.push(
                <div className={`div${i}`} key={i}>
                    <Link to={"post/" + i}>
                        <Card title={'Come resettare il telefono -' + i} />
                    </Link>
                </div>
            )
        }*/
        articles.map((article,i)=>(
            grid.push(
                <div className={`div${(i+1)}`} key={(i+1)}>
                    <Link to={"article/" + (i+1)}>
                        <Card title={article.title!} />
                    </Link>
                </div>
            )
        ))
        return grid;
    }


    return (
        <div className="Home">
            <div className="grid-container">
                {createGrid()}
            </div>
        </div>
    )
}
export default Home;