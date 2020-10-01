import React, { Fragment } from 'react'
import spinner from '../images/spinner.svg'

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt='loading...' style={{ width: '200px', paddingTop: '100px', margin: 'auto', display: 'block' }}/>
        </Fragment>
    )
}

export default Spinner