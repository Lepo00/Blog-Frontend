import Article from "../../models/Article"

const initialState = {
    articles:[],
    loading:true
}

export default function(state = initialState, action: { type: string; payload: {articles:Article[]} }){
    switch(action.type){
        case "GET_ARTICLES":
        return {
            ...state,
            articles:action.payload,
            loading:false
        }
        default: return state
    }
}