import { Action, Article, ArticleState } from "../../models";

const initialState: ArticleState = {
    articles: [],
    detail: {},
    size: 0
}

const articleReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "MY_ARTICLES": case "FIRST_ARTICLES": case "ARTICLES_BY_CATEGORY": case "SEARCH_ARTICLES":
            return {
                ...state,
                articles: action.payload as Article[],
                detail: {}
            }
        case "DETAIL_ARTICLE" :case "CREATE_ARTICLE":case "UPDATE_ARTICLE":
            return {
                ...state,
                detail: action.payload as Article,
                articles:[]
            }
        case "MY_ARTICLE_SIZE": case "SEARCH_SIZE": case "CATEGORY_SIZE":
            return {
                ...state,
                size: action.payload as number,
            }
        default: return state
    }
}
export default articleReducer;