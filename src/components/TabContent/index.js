
import React from 'react'

const TabContent = ({children, index, value}) => {

    return (
        <div className={index !== value ? 'hidden': ''}> 
            {children}
        </div>
    )
} 

export default TabContent