import React, { Fragment } from 'react'

const GiphyItem = (props) => {
    
    return (
        <Fragment>
            <img style={userStyle} src={props.gif}/>
        </Fragment>
    )
}

const userStyle = {
    maxWidth: '300px',
    maxHeight: '300px',
    paddingBottom: '1rem'
}

export default GiphyItem