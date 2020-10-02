import React, { useReducer } from 'react'
import axios from 'axios'
import GiphyContext from './giphyContext'
import GiphyReducer from './giphyReducer'

import {
    SEARCH_GIPHYS,
    SET_LOADING,
    CLEAR_GIPHYS,
    GET_GIPHY
} from '../types'

const API_KEY = '1L3eEnVgnRLhgoGaULaa0btddYkhJT8O'

const GiphyState = (props) => {

    const initialState = {
        giphys: [],
        giphy: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GiphyReducer, initialState)

    // search giphys
    const searchGiphys = async (text) => {
        setLoading()

        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${API_KEY}`)

        dispatch({
            type: SEARCH_GIPHYS,
            payload: res.data.data
        })
    }

    const getGiphy = async (id) => {
        // https://api.giphy.com/v1/gifs/53UkYwhzhlBSg?api_key=1L3eEnVgnRLhgoGaULaa0btddYkhJT8O
        setLoading()
        console.log(id)
        const res = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
        // console.log(res)
        dispatch({
            type: GET_GIPHY,
            payload: res.data.data
        })
    }

    // clear giphys
    const clearGiphys = () => dispatch({
        type: CLEAR_GIPHYS
    })

    // set loading 
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GiphyContext.Provider value={{
        giphys: state.giphys,
        loading: state.loading,
        giphy: state.giphy,
        setLoading,
        searchGiphys,
        clearGiphys,
        getGiphy
    }}>
    {props.children}
    </GiphyContext.Provider>
}

export default GiphyState