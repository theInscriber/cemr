import React, { useState, useEffect } from 'react'
import { Button, Card, FormControl, InputField, ScrollBar, TabBar, Tab } from '@dhis2/ui-core'
import ModalForm from '../modal-form'
import TabContent from '../TabContent';

const AddPersonForm = ({isOpen, setIsFormOpen}) => {
    const [tabs, setSelectedTab] = useState([true, false, false, false])
    const [tabPanelValue, setTabPanelValue] = useState(0)
    
    const handleAddVisit = (value) => {
        setIsFormOpen(value)
    }
    
    
    const handleClickAway = (value) => {
        setIsFormOpen(false)
    }
    
    // useEffect(()=>{
    //     console.log(isOpen, isFormOpen)
    //     setIsFormOpen(isOpen)
    //     isOpen = false
    // })

    const changeSelectedTab = (index, e) => {
        e.preventDefault();
        setSelectedTab(tabs.map((value, key) => {
            return (key === index) ? !value : false
        }))

        setTabPanelValue(index)
    }

    return (
        
        <ModalForm 
        title='Add New Person'
        isOpen={isOpen} 
        setIsModalOpen={handleClickAway}
        buttons={
            <>
                <Button
                    onClick={() => setIsFormOpen(false)}
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
            <TabBar fixed>
                <Tab selected={tabs[0]} onClick={(e) => changeSelectedTab(0, e)}>
                    Important Data
                </Tab>
                <Tab selected={tabs[1]} onClick={(e) => changeSelectedTab(1, e)}>
                    Tab B
                </Tab>
                <Tab selected={tabs[2]} onClick={(e) => changeSelectedTab(2, e)}>
                    Tab C
                </Tab>
                <Tab selected={tabs[3]} onClick={(e) => changeSelectedTab(3, e)}>
                    Tab D
                </Tab>
            </TabBar>
            <TabContent index={0} value={tabPanelValue}>
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
            </TabContent>
            <TabContent index={1} value={tabPanelValue}>
                Tab B
            </TabContent>
            <TabContent index={2} value={tabPanelValue}>
                TabC
            </TabContent>
            <TabContent index={3} value={tabPanelValue}>
                Tab D
            </TabContent>
    </ModalForm>

    )
} 

export default AddPersonForm

