import Article from "../../models/Article";

const initialState:{articles:Article[], loading: boolean} = {
    articles: [] as Article[],
    loading: true
}

interface Action{ type: string; payload:Article[]}; 

const articleReducer = (state = initialState, action: Action )=> {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                articles: action.payload, loading: false
            }
        case "FIRST_ARTICLES":
            return {
                articles: action.payload, loading: false
            }
        default: return state
    }
}
export default articleReducer;