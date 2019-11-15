import React, { useState, useEffect } from 'react'
import { Button, Card, FormControl, InputField, ScrollBar, TabBar, Tab } from '@dhis2/ui-core'
import ModalForm from '../modal-form'
import TabPanel from '../TabPanel';

const Info = (props) => {
    const [tabs, setSelectedTab] = useState([true, false, false, false])
    const [tabPanelValue, setTabPanelValue] = useState(0)

    let {className} = props

    if (className === undefined){
        className = ''
    }

    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleAddVisit = (value) => {
        setIsFormOpen(value)
    }

    const handleClickAway = (value) => {
        setIsFormOpen(false)
    }

    const clickTab = (index, e) => {
        e.preventDefault();
        setSelectedTab(tabs.map((value, key) => {
            return (key === index) ? !value : false
        }))

        setTabPanelValue(index)
    }

    useEffect(()=>{

    })

    return (
        <Card className={`card-info ${className}`}>
            <div className="card-body">
                <p>Patient Not Found</p>
                <Button

                name="Button"
                onClick={handleAddVisit}
                primary
                type="button"
                value="default"
                >
                    Add Patient
                </Button>

            </div>
            <ModalForm
                title='Add New Person'
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
                    <ScrollBar>
                        <TabBar fixed>
                            <Tab selected={tabs[0]} onClick={(e) => clickTab(0, e)}>
                                Importanter
                            </Tab>
                            <Tab selected={tabs[1]} onClick={(e) => clickTab(1, e)}>
                                Tab B
                            </Tab>
                            <Tab>
                                Tab C
                            </Tab>
                            <Tab>
                                Tab D
                            </Tab>
                        </TabBar>
                    </ScrollBar>
                    <TabPanel index={0} value={tabPanelValue}>
                        hallo
                    </TabPanel>
                    <TabPanel index={1} value={tabPanelValue}>
                        hallo1w
                    </TabPanel>
                    <div>
                        <FormControl>
                            <InputField
                            label="First Name *"
                            name="input"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputField
                            label="Last Name *"
                            name="input2"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputField
                            label="NationalId"
                            name="input2"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputField
                            label="Birthdate"
                            name="input2"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputField
                            label="Home Address"
                            name="input2"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                        <FormControl>
                            <InputField
                            label="Birthdate"
                            name="input2"
                            onBlur={function onBlur(){}}
                            onChange={function onChange(){console.log("Nothing happens")}}
                            onFocus={function onFocus(){}}
                            type="text"
                            />
                        </FormControl>
                    </div>
            </ModalForm>
        </Card>
    )
}

export default Info
