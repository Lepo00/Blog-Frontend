import { Action, Article } from "../../models";

const initialState: { articles: Article[], detail: Article } = {
    articles: [],
    detail: {}
}

const articleReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
            }
        case "FIRST_ARTICLES":
            return {
                ...state,
                articles: action.payload,
            }
        case "DETAIL_ARTICLE":
            return {
                ...state,
                detail: action.payload,
            }
        case "CREATE_ARTICLE":
            return {
                ...state,
                detail: action.payload,
            }
        default: return state
    }
}
export default articleReducer;