import {instance as axios, noToken} from '../../config/axiosConfig';
import {Action, Article} from '../../models';

export const getArticles =()=>async(dispatch:(action: Action)=>void)=>{
    const res = await axios.get<Article[]>('user/my-articles');
    dispatch({
        type: "GET_ARTICLES",
        payload: res.data
    })
}

export const getFirstArticles =(limit:number)=>async(dispatch:(action: Action)=>void)=>{
    const res = await noToken.get<Article[]>('article/limit/'+limit);
    dispatch({
        type: "FIRST_ARTICLES",
        payload: res.data
    })
}

export const detailArticle =(id:number)=>async(dispatch:(action: Action)=>void)=>{
    const res = await axios.get<Article>('article/'+id);
    dispatch({
        type: "DETAIL_ARTICLE",
        payload: res.data
    })
}