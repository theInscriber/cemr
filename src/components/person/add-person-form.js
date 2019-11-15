import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import React, { useState } from 'react'
import { Button, FormControl, InputField, TabBar, Tab, RadioGroup, ButtonStrip } from '@dhis2/ui-core'
import { useDataMutation, DataMutation } from '@dhis2/app-runtime'
import ModalForm from '../modal-form'
import TabContent from '../TabContent';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'



const mutation = {
    resource: 'trackedEntityInstances',
    type: 'create',
    data: ({ trackedEntityType, orgUnit, attributes, enrollments }) => ({
        trackedEntityType, orgUnit, attributes, enrollments
    }),
}

const AddPersonForm = ({isOpen, setIsFormOpen}) => {
    const [tabs, setSelectedTab] = useState([true, false, false, false])
    const [tabPanelValue, setTabPanelValue] = useState(0)

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [gender, setGender] = useState()
    const [DoB, setDoB] = useState()
    const [nationalID, setNatinalID] = useState()

    const handleClickAway = () => {
        setIsFormOpen(false)
    }
    const changeSelectedTab = (index, e) => {
        e.preventDefault();
        setSelectedTab(tabs.map((value, key) => {
            return (key === index) ? !value : false
        }))

        setTabPanelValue(index)
    }

    const attributes = [
        {attribute : "UHT1HU1U0gO", value : firstName},
        {attribute : "G4njs26hhxm", value : lastName,},
        {attribute : "rJTMfOeOmpI", value : gender,},
        {attribute : "gHGyrwKPzej", value : DoB},
        {attribute : "ueFYuD7UFwB", value : nationalID,}
    ]

    const enrollments = [ {
        orgUnit: "ImspTQPwCqd",
        program: "yGjTvvN9oLb",
    }];

    
    const [mutate, { called, loading, error, data }] = useDataMutation(mutation, {
        onComplete: (ew) => console.log(ew),
        onError: err => console.log(err),
        variables: {
            trackedEntityType: "JhCcn4N3IW5",
            orgUnit: "ImspTQPwCqd",
            attributes: attributes,
            enrollments: enrollments
        }
    }
    )
    
    const createPerson = () => {
        mutate({attributes})
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
                    onClick={() => createPerson()}
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
                    Allegies
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
                        name="firstName"
                        onBlur={function onBlur(){}}
                        onChange={(e) => {setFirstName(e.target.value)}}
                        onFocus={function onFocus(){}}
                        type="text"
                        value={firstName}
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                        label="Last Name *"
                        name="lastName"
                        onBlur={function onBlur(){}}
                        onChange={(e) => {setLastName(e.target.value)}}
                        onFocus={function onFocus(){}}
                        value={lastName}
                        type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                        label="National Identity *"
                        name="nationalID"
                        onChange={(e) => {setNatinalID(e.target.value)}}
                        type="text"
                        value={nationalID}
                        />
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker 
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-of-birth"
                            label="Date of Birth"
                            onChange={(e) => setDoB(new Date(e).toISOString().split('T')[0])}
                            value={DoB}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <RadioGroup
                        inline
                        label="Sex"
                        name="sex"
                        options={[
                            {
                            label: 'Male',
                            value: 'Male'
                            },
                            {
                            label: 'Female',
                            value: 'Female'
                            }
                        ]}
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                    />
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

