import React, { useContext, useEffect } from 'react'
import GiphyContext from '../context/Giphy/giphyContext'

const Giphy = ({ match }) => {

    const giphyContext = useContext(GiphyContext)

    const { giphy, getGiphy } = giphyContext

    const {
        title,
        images
    } = giphy

    useEffect(() => {
        getGiphy(match.params.id)
    },[])


    // console.log(match.params.id)

    return (
        <div style={userStyles}>
            <h1 style={{color: '#fff'}}>{title}</h1>
            <img src={images && (images.original.url) } alt=''/>
        </div>   
    )
}

const userStyles = {
    textAlign: 'center'
}

export default Giphy