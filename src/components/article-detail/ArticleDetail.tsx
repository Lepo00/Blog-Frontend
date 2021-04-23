import './ArticleDetail.scss';
import {AuthorCard} from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailArticle } from '../../store/actions';
import { RootState } from '../../store/reducers';


function PostDetail(props: any) {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(detailArticle(props.match.params.id))}, [dispatch, props]);
    const {detail} = useSelector((state: RootState) => state.articleReducers);

    function img() {
        const id = detail.image?.id;
        return id ? "http://localhost:8080/blog/image/display/" + id : "../assets/no-image.png";
    }
    
    return (
        <div className="Post">
            <div className="container">
                <div className="doc">
                    <h1 className="title">{detail.title}</h1>
                    <img src={img()} alt="" className="image" />
                    <p className="text">{detail.text}</p>
                    <AuthorCard author={detail.author}/>
                </div>
                <div className="related">
                    <h1>Related</h1>
                    <h1>Related</h1>
                    <h1>Related</h1>
                    <h1>Related</h1>
                    <h1>Related</h1>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;
