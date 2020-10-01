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
            <div>
                {giphys.map(giphy => {
                    return <GiphyItem gif={giphy.images.original.url}/>
                })}
            </div>
        )
    }
}

export default Giphys