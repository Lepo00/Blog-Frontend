import { instance as axios, noToken } from '../../config/axiosConfig';
import { Article, AppThunk } from '../../models';

export const myArticles = (): AppThunk => async dispatch => {
    try {
        const { data } = await axios.get<Article[]>('user/my-articles');
        dispatch({
            type: "MY_ARTICLES",
            payload: data
        })
    }catch{
        dispatch({
            type: "MY_ARTICLES",
            payload: []
        })
    }
}

export const getFirstArticles = (limit: number): AppThunk => async dispatch => {
    const { data } = await noToken.get<Article[]>('article/limit/' + limit);
    dispatch({
        type: "FIRST_ARTICLES",
        payload: data
    })
}

export const detailArticle = (id: number): AppThunk => async dispatch => {
    const { data } = await axios.get<Article>('article/' + id);
    dispatch({
        type: "DETAIL_ARTICLE",
        payload: data
    })
}

export const createArticle = (article: FormData): AppThunk => async dispatch => {
    const { data } = await axios.post<Article>('user/addArticle', article);
    dispatch({
        type: "CREATE_ARTICLE",
        payload: data
    })
}
