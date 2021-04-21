import { Action, Article, ArticleState } from "../../models";

const initialState: ArticleState = {
    articles: [],
    detail: {}
}

const articleReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "MY_ARTICLES":
            return {
                ...state,
                articles: action.payload as Article[],
            }
        case "FIRST_ARTICLES":
            return {
                ...state,
                articles: action.payload as Article[],
            }
        case "DETAIL_ARTICLE":
            return {
                ...state,
                detail: action.payload as Article,
            }
        case "CREATE_ARTICLE":
            return {
                ...state,
                detail: action.payload as Article,
            }
        default: return state
    }
}
export default articleReducer;