import './Home.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../models/Post';
import Card from '../../components/ui/card/Card';

function Home() {
    const [posts, setPosts] = useState([] as Post[]);

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
        for (let i = 1; i < 12; i++) {
            grid.push(
                //                <Link to={"post/" + i}>
                <div className={`div${i}`} key={i}>
                        <Card title={'Come resettare il telefono -' + i} />
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