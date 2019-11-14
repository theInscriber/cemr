import React, { useState } from 'react'

import reactRouterDom from 'react-router-dom'
const { useRouteMatch } = reactRouterDom

import { Button, Card, FormControl, InputField, ScrollBar, TabBar, Tab } from '@dhis2/ui-core'


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
            <ModalForm 
                title='Add New Info'
                isOpen={isFormOpen} setIsModalOpen={handleClickAway}
                buttons={
                    <>
                        <Button
                            onClick={function(){return alert('something')}}
                            secondary
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={function(){return alert('something')}}
                            primary
                            type="button"
                        >
                            Add
                        </Button>
                    </>
                }
            >
                <div>
                <FormControl>
                            <InputField
                            label="Conditions"
                            name="input"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputField
                            label="Conditions"
                            name="input2"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                </div>
            </ModalForm>
        </>
    )
} 

export default Visits