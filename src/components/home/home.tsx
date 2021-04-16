import './Home.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Article from '../../models/Article';
import Card from '../../components/ui/card/Card';

function Home() {
    const [posts, setPosts] = useState([] as Article[]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        const posts = data.slice(0, 10);
        setPosts(posts);
    }

    const createGrid = () => {
        let grid = []
        let className: string;
        for (let i = 1; i < 8; i++) {
            grid.push(
                <div className={`div${i}`} key={i}>
                    <Link to={"post/" + i}>
                        <Card title={'Come resettare il telefono -' + i} />
                    </Link>
                </div>
            )
        }
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