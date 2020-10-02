import React, { useContext } from 'react'
import AlertContext from '../context/Alert/alertContext'

const Alert = () => {

    const alertContext = useContext(AlertContext)

    const { alert } = alertContext

    return (
        alert !== null && (
            <div className='alert'>
                <i className='fas fa-info-circle'/> {alert.message}
            </div>
        )
    )
}

export default Alert