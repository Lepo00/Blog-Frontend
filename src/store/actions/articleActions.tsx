import {instance as axios} from '../../config/axiosConfig';
import Article from '../../models/Article';

export const getArticles =()=>async(dispatch:(action: { type:string; payload:Article[]})=>void)=>{
    const res = await axios.get('user/my-articles');
    dispatch({
        type: "GET_ARTICLES",
        payload: res.data
    })
}

export const getFirstArticles =(limit:number)=>async(dispatch:(action: { type:string; payload:Article[]})=>void)=>{
    const res = await axios.get('article/limit/'+limit);
    dispatch({
        type: "FIRST_ARTICLES",
        payload: res.data
    })
}