import { Action, Article, ArticleState } from "../../models";

const initialState: ArticleState = {
    articles: [],
    detail: {},
    size: 0
}

const articleReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "MY_ARTICLES": case "FIRST_ARTICLES": case "ARTICLES_BY_CATEGORY":
            return {
                ...state,
                articles: action.payload as Article[],
            }
        /*case "FIRST_ARTICLES":
            return {
                ...state,
                articles: action.payload as Article[],
            }*/
        case "DETAIL_ARTICLE" :case "CREATE_ARTICLE":
            return {
                ...state,
                detail: action.payload as Article,
            }
        /*case "CREATE_ARTICLE":
            return {
                ...state,
                detail: action.payload as Article,
            }*/
        case "MY_ARTICLE_SIZE":
            return {
                ...state,
                size: action.payload as number,
            }
        /*case "ARTICLES_BY_CATEGORY":
            return {
                ...state,
                articles: action.payload as Article[],
            }*/
        default: return state
    }
}
export default articleReducer;