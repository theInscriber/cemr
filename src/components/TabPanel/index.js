
import React, { useState } from 'react'

import reactRouterDom from 'react-router-dom'
const { useRouteMatch } = reactRouterDom

import Visits from '../visits';
// import CardButton from '../card-button';
// import ModalForm from '../modal-form';


const TabPanel = ({children, index, value}) => {

    return (
        <div className={index !== value ? 'hidden': ''}> 
            {children}
        </div>
    )
} 

export default TabPanel