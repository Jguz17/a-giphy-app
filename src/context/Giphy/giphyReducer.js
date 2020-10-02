import {
    SEARCH_GIPHYS,
    SET_LOADING,
    CLEAR_GIPHYS,
    GET_GIPHY
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SEARCH_GIPHYS:
            return {
                ...state,
                giphys: action.payload,
                loading: false
            }
        case GET_GIPHY:
            return {
                ...state,
                giphy: action.payload,
                loading: false
            }
        case CLEAR_GIPHYS:
            return {
                ...state,
                giphys: [],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}