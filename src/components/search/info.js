import React, { useState } from 'react'
import { Button, Card} from '@dhis2/ui-core'
import AddPersonForm from '../person/add-person-form';

const Info = (props) => {
    let {className} = props

    if (className === undefined){
        className = ''
    }

    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleAddVisit = () => {
        setIsFormOpen(true)
    }

    const handleFormClose = (value) => {
        setIsFormOpen(value)
    }

    return (
        <Card className={`card-info ${className}`}>
            <div className="card-header"><h3>Patient Health Passport not Found!</h3></div>
            <div className="card-body">
                <Button

                name="Button"
                onClick={handleAddVisit}
                primary
                type="button"
                value="default"
                >
                    Add New Health Passport
                </Button>

            </div>
            <AddPersonForm isOpen={isFormOpen} setIsFormOpen={handleFormClose}/>

        </Card>
    )
}

export default Info
