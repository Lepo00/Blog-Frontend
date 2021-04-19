import { Action, Article } from "../../models";

const initialState: { articles: Article[], loading: boolean, detail: Article } = {
    articles: [],
    loading: true,
    detail: {}
}

const articleReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case "FIRST_ARTICLES":
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case "DETAIL_ARTICLE":
            return {
                ...state,
                detail: action.payload,
                loading: false
            }
        case "CREATE_ARTICLE":
            return {
                ...state,
                detail: action.payload,
                loading: false
            }
        default: return state
    }
}
export default articleReducer;