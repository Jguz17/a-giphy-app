import React, { Fragment } from 'react'

const GiphyItem = (props) => {
    
    return (
        <Fragment>
            <img src={props.gif}/>
        </Fragment>
    )
}

export default GiphyItem