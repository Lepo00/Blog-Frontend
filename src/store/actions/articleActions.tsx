import axios from 'axios';
import Article from '../../models/Article';

export const getArticles =()=>async(dispatch:(action: { type:string; payload:Article[]})=>void)=>{
    const res = await axios.get('http://localhost:8080/blog/user/my-articles');
    dispatch({
        type: "GET_ARTICLES",
        payload: res.data
    })
}