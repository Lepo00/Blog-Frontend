import Article from "../../models/Article"

const initialState = {
    articles: [],
    loading: true
}
interface Action {
    type: string;
    payload: { articles: Article[] }
}

export default function (state = initialState, action: Action) {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state, articles: action.payload, loading: false
            }
        default: return state
    }
}