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
            {giphyContext.giphys.length > 0 &&(
                    <button onClick={giphyContext.clearGiphys} style={clearStyles}>clear</button>
                )}
        </Fragment>
    )
}

const clearStyles = {
    width: '100%',
    height: '3rem',
    marginTop: '1rem',
    border: 'none',
    background: '#dc3545'
}


export default Search