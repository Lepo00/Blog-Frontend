import './Post.scss';
import { useEffect, useState } from 'react';
import Post from '../../models/Post';

function Posts(props: { match: { params: { id: any; }; }; }) {
    const [post, setPost] = useState<Post>({});
    
    useEffect(() =>{
        const fetchPost = async()=>{
            const id= props.match.params.id;
            const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/'+id)).json();
            setPost(post);
        }
        fetchPost();
    }, [props]);

    return (
        <div>
            <h1>Post {post.id}</h1>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>
        </div>
    )
}

export default Posts;
