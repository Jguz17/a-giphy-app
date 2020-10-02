import React, { useContext } from 'react'
import GiphyItem from './GiphyItem'
import Spinner from '../components/Spinner'

import GiphyContext from '../context/Giphy/giphyContext'

const Giphys = () => {

    const giphyContext = useContext(GiphyContext)

    const { giphys, loading } = giphyContext

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {giphys.map(giphy => {
                    return <GiphyItem gif={giphy.images.original.url}/>
                })}
            </div>
        )
    }
}

const userStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingTop: '3rem'
}

export default Giphys