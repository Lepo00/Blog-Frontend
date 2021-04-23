import { instance as axios, noToken } from '../../config/axiosConfig';
import { Article, AppThunk } from '../../models';

export const myArticles = (page: number, size: number): AppThunk => async dispatch => {
    const params = new URLSearchParams([['page', page + ''], ['size', size + '']]);
    try {
        const { data } = await axios.get<Article[]>('user/my-articles', { params });
        dispatch({
            type: "MY_ARTICLES",
            payload: data
        })
        dispatch(myArticlesSize())
    } catch {
        dispatch({
            type: "MY_ARTICLES",
            payload: []
        })
    }
}

export const myArticlesSize = (): AppThunk => async dispatch => {
    const { data } = await axios.get('user/my-articles-size');
    dispatch({
        type: "MY_ARTICLE_SIZE",
        payload: data
    })
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

export const deleteArticle = (id: number): AppThunk => async dispatch => {
    await axios.delete('article/' + id);
    dispatch({
        type: "DELETE_ARTICLE",
    })
}

export const articlesByCategory = (category: string, page: number, size: number): AppThunk => async dispatch => {
    const params = new URLSearchParams([['page', page + ''], ['size', size + ''], ['category', category]]);
    try {
        const { data } = await axios.get<Article[]>('article', { params });
        dispatch({
            type: "ARTICLES_BY_CATEGORY",
            payload: data
        })
        dispatch(categorySize(category));
    } catch {
        dispatch({
            type: "ARTICLES_BY_CATEGORY",
            payload: []
        })
    }
}

export const categorySize = (category: string): AppThunk => async dispatch => {
    const params = new URLSearchParams([['category', category]]);
    const { data } = await axios.get<Article[]>('article/category-size', { params });
    dispatch({
        type: "CATEGORY_SIZE",
        payload: data
    })
}

export const searchArticles = (title: string, page: number, size: number): AppThunk => async dispatch => {
    const params = new URLSearchParams([['page', page + ''], ['size', size + ''], ['title', title]]);
    try {
        const { data } = await axios.get<Article[]>('article/search', { params });
        dispatch({
            type: "SEARCH_ARTICLES",
            payload: data
        })
        dispatch(searchSize(title));
    } catch {
        dispatch({
            type: "SEARCH_ARTICLES",
            payload: []
        })
    }
}

export const searchSize = (title: string): AppThunk => async dispatch => {
    const { data } = await axios.get('article/search-size', { params: { title } });
    dispatch({
        type: "SEARCH_SIZE",
        payload: data
    })
}