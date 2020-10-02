import React, { Fragment, useState, useContext } from 'react'

import GiphyContext from '../context/Giphy/giphyContext'
import AlertContext from '../context/Alert/alertContext'

const Search = () => {

    const giphyContext = useContext(GiphyContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            alertContext.setAlert('Please enter something')
        } else {
            giphyContext.searchGiphys(text)
            setText('')
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <input id='search' type='text' placeholder='Search Giphy...' name='search' value={text} onChange={onChange}/>
                <input className='search' style={buttonStyles} type='submit' value='Search'/>
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

const buttonStyles = {
    width: '100%',
    border: 'none',
    height: '3rem',
    outline: 'none',
    marginTop: '1rem',
    backgroundColor: '#00924C'
}


export default Search