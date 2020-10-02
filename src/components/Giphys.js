import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
                    return (
                        <div style={giphyContainerStyles}>
                            <GiphyItem gif={giphy.images.original.url}/>
                            <Link to={`/giphy/${giphy.id}`}><button style={buttonStyles}>More Info</button></Link>
                        </div>
                    )
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

const giphyContainerStyles = {
    display: 'inherit',
    flexDirection: 'column',
    paddingBottom: '1rem'
}

const buttonStyles = {
    marginTop: '.5rem',
    height: '2rem',
    border: 'none',
    color: '#131313',
    backgroundColor: '#fff',
    width: '100%'
}

export default Giphys