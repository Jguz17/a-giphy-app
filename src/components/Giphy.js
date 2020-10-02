import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GiphyContext from '../context/Giphy/giphyContext'
import Spinner from './Spinner'

const Giphy = ({ match }) => {

    const giphyContext = useContext(GiphyContext)

    const { giphy, getGiphy, loading } = giphyContext

    const {
        title,
        images
    } = giphy

    useEffect(() => {
        getGiphy(match.params.id)
        // eslint-disable-next-line
    },[])


    if (loading) {
        return <Spinner/>
    }

    return (
        <div>
            <Link to='/'><button style={buttonStyles}>Back To Search</button></Link>
            <div style={userStyles}>
                <h1 style={{color: '#fff'}}>{title}</h1>
                <img src={images && (images.original.url) } alt=''/>
            </div>   
        </div>
        
    )
}

const userStyles = {
    textAlign: 'center'
}

const buttonStyles = {
    backgroundColor: '#dc3545',
    border: 'none',
    width: '8rem',
    height: '2rem'
}

export default Giphy