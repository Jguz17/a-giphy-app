import React, { Fragment, useState, useContext } from 'react'

import GiphyContext from '../context/Giphy/giphyContext'

const Search = () => {

    const giphyContext = useContext(GiphyContext)

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        giphyContext.searchGiphys(text)
        setText('')
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input id='search' type='text' placeholder='Search Giphy...' name='search' value={text} onChange={onChange}/>
            </form>
        </Fragment>
    )
}

export default Search