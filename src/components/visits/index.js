import React, { useState } from 'react'

import reactRouterDom from 'react-router-dom'
const { useRouteMatch } = reactRouterDom

import Visit from './visit';
import CardButton from '../card-button';
import ModalForm from '../modal-form';

const Visits = () => {
    const [isFormOpen, setIsFormOpen] = useState(false) 

    const handleAddVisit = (value) => {
        setIsFormOpen(value)
    }

    const handleClickAway = (value) => {
        setIsFormOpen(false)
    }

    return (
        <>  
            <div style={{width: '80%', margin: 'auto'}}>
                <CardButton onClick={handleAddVisit}/>
                <Visit/>
                <Visit/>
                <Visit/>
                <Visit/>
                <Visit/>
            </div>
            <ModalForm isOpen={isFormOpen} setIsModalOpen={handleClickAway}/>
        </>
    )
} 

export default Visits