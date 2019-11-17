import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import React, { useState } from 'react'
import { Button, FormControl, InputField, TabBar, Tab, RadioGroup, ButtonStrip, AlertBar, CircularLoader, ComponentCover } from '@dhis2/ui-core'
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

    const [nationalID, setNatinalID] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [gender, setGender] = useState()
    const [DoB, setDoB] = useState()
    const [address, setAddress] = useState()
    const [fathersName, setFathersName] = useState()
    const [mothersName, setMothersName] = useState()
    const [allergies, setAllergies] = useState()
    const [specialIllness, setSpecialIllness] = useState()
    const [specialMedication, setSpecialMedication] = useState()
    const [bloodType, setBloodType] = useState()

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

    const [mutate, { called, loading, error, data }] = useDataMutation(mutation, {
        onComplete: (ew) => console.log(ew),
        onError: err => console.log(err),
        variables: {}
    }
    )

    const createPerson = () => {
        const attributes = [
            {attribute : "ueFYuD7UFwB", value : nationalID},
            {attribute : "UHT1HU1U0gO", value : firstName},
            {attribute : "G4njs26hhxm", value : lastName},
            {attribute : "rJTMfOeOmpI", value : gender},
            {attribute : "zyiaJT7keXJ", value : DoB},
            {attribute : "yWr8ngSC52h", value : address},
            {attribute : "GLlnpfjPZ0b", value : fathersName},
            {attribute : "SInsInHYbPs", value : mothersName},
            {attribute : "l7PCs8SSrBB", value : allergies},
            {attribute : "iUizvAjZyrG", value : specialIllness},
            {attribute : "H4CHPyfC8QW", value : specialMedication},
            {attribute : "a21KcXeip1J", value : bloodType}
        ]

        const enrollments = [ {
            orgUnit: "ImspTQPwCqd",
            program: "yGjTvvN9oLb",
        }];

        let payload = {
            trackedEntityType: "JhCcn4N3IW5",
            orgUnit: "ImspTQPwCqd",
            attributes: attributes,
            enrollments: enrollments
        }

        mutate(payload)
    }

    const handleSuccess = (data) => {
        if (data) {
            setIsFormOpen(false)

        return (<div
            className="alert-bars"
            style={{
                bottom: 0,
                left: 0,
                paddingLeft: 16,
                position: 'fixed',
                width: '100%',
                zIndex : 9999
            }}
        >
            <AlertBar
                duration={8000}
                icon
                success
                permanent={false}
            >
                Patient Health Passport Added
            </AlertBar>
        </div>)
        }else {
            return <></>
        }
    }

    return (
        <>
            {
                loading? (
                    <div
                        className="alert-bars"
                        style={{
                            bottom: 0,
                            left: 0,
                            paddingLeft: 16,
                            position: 'fixed',
                            width: '100%',
                            zIndex : 3500
                        }}
                    >
                        <ComponentCover><CircularLoader /></ComponentCover>
                    </div>
                ):<></>
            }

            {
                error? (<div
                            className="alert-bars"
                            style={{
                                bottom: 0,
                                left: 0,
                                paddingLeft: 16,
                                position: 'fixed',
                                width: '100%',
                                zIndex : 9999
                            }}
                        >
                            <AlertBar
                                duration={8000}
                                icon
                                critical
                                permanent={false}
                            >
                                Something went Wrong, Please check the form and try again
                            </AlertBar>
                </div>):<></>
            }

            {
                handleSuccess(data)
            }

            <ModalForm
                title='Add New Health Passport'
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
                {/* <TabBar fixed>
                <Tab selected={tabs[0]} onClick={(e) => changeSelectedTab(0, e)}>
                    Important Data
                </Tab>
                <Tab selected={tabs[1]} onClick={(e) => changeSelectedTab(1, e)}>
                    Allegies
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
            </TabContent>*/}
                <div>
                    <FormControl>
                        <FormControl>
                            <InputField
                                label="National Identity"
                                name="nationalID"
                                onChange={(e) => {setNatinalID(e.target.value)}}
                                type="text"
                                value={nationalID}
                                required
                            />
                        </FormControl>
                        <InputField
                            label="First Name"
                            name="firstName"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setFirstName(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={firstName}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Last Name"
                            name="lastName"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setLastName(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={lastName}
                            type="text"
                            required
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
                            required
                        />
                    </MuiPickersUtilsProvider>
                    <RadioGroup
                        inline
                        label="Gender"
                        name="gender"
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
                        required
                    />
                    <FormControl>
                        <InputField
                            label="Address"
                            name="address"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setAddress(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={address}
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Father's Name"
                            name="fathersName"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setFathersName(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={fathersName}
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Mother's Name"
                            name="mothers-name"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setMothersName(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={mothersName}
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Allergies"
                            name="allergies"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setAllergies(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={allergies}
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Special Medication"
                            name="special-medication"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setSpecialMedication(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={specialMedication}
                            type="text"
                        />
                    </FormControl>
                    <FormControl>
                        <RadioGroup
                            inline
                            label="Special Illness"
                            name="special-illness"
                            options={[
                                {
                                    label: 'Diabetes',
                                    value: 'Diabetes'
                                },
                                {
                                    label: 'Heart Disease',
                                    value: 'Heart Disease'
                                },
                                {
                                    label: 'TB',
                                    value: 'TB'
                                },
                                {
                                    label: 'Epilepsy',
                                    value: 'Epilepsy'
                                },
                                {
                                    label: 'Asthma',
                                    value: 'Asthma'
                                },
                                {
                                    label: 'Mental Retardation',
                                    value: 'Mental Retardation'
                                }
                            ]}
                            onChange={(e) => setSpecialIllness(e.target.value)}
                            value={specialIllness}
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Blood Type"
                            name="blood-type"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setBloodType(e.target.value)}}
                            onFocus={function onFocus(){}}
                            value={bloodType}
                            type="text"
                        />
                    </FormControl>
                </div>
            </ModalForm>

        </>




    )
}

export default AddPersonForm

