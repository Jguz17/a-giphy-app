import React, { useReducer } from 'react'
import axios from 'axios'
import GiphyContext from './giphyContext'
import GiphyReducer from './giphyReducer'

import {
    SEARCH_GIPHYS,
    SET_LOADING
} from '../types'

const API_KEY = '1L3eEnVgnRLhgoGaULaa0btddYkhJT8O'

const GiphyState = (props) => {

    const initialState = {
        giphys: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GiphyReducer, initialState)

    // search giphys
    const searchGiphys = async (text) => {
        setLoading()

        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${API_KEY}&limit=10`)

        dispatch({
            type: SEARCH_GIPHYS,
            payload: res.data.data
        })
    }

    // set loading 
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GiphyContext.Provider value={{
        giphys: state.giphys,
        loading: state.loading,
        setLoading,
        searchGiphys
    }}>
    {props.children}
    </GiphyContext.Provider>
}

export default GiphyState