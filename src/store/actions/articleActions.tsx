import {instance as axios} from '../../config/axiosConfig';
import Article from '../../models/Article';

export const getArticles =()=>async(dispatch:(action: { type:string; payload:Article[]})=>void)=>{
    const res = await axios.get('user/my-articles');
    dispatch({
        type: "GET_ARTICLES",
        payload: res.data
    })
}