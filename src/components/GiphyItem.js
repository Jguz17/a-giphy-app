import React, { Fragment } from 'react'

const GiphyItem = (props) => {
    
    return (
        <Fragment>
            <img style={userStyle} src={props.gif} alt=''/>
        </Fragment>
    )
}

const userStyle = {
    maxWidth: '300px',
    maxHeight: '300px',
}
export default GiphyItem