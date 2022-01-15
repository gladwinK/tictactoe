import { FaTimes, FaCircle, FaPen } from 'react-icons/fa'
import React from 'react'
function Icon({ type }) {

    switch (type) {
        case 'cross':
            return <FaTimes className='icon'/>
        case 'circle':
            return <FaCircle className='icon'/>
        default:
            return <FaPen className='icon'/>
    }
}

export default Icon;