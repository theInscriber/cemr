import React, { useState } from 'react'

import reactRouterDom from 'react-router-dom'
const { useRouteMatch } = reactRouterDom
import { useDataMutation, DataMutation } from '@dhis2/app-runtime'

import { Button, Card, FormControl, InputField, ScrollBar, TabBar, Tab, SelectField, RadioGroup } from '@dhis2/ui-core'


import Visit from './visit';
import CardButton from '../card-button';
import ModalForm from '../modal-form';

const mutation = {
    resource: 'events',
    type: 'create',
    data: ({ program, programStage, orgUnit, trackedEntityInstance, status, eventDate, storedBy, dataValues }) => ({
        program, programStage, orgUnit, trackedEntityInstance, status, eventDate, storedBy, dataValues
    }),
}


// const labMutation = {
//     resource: 'events',
//     type: 'create',
//     data: ({ program, programStage, orgUnit, trackedEntityInstance, status, eventDate, storedBy, dataValues }) => ({
//         program, programStage, orgUnit, trackedEntityInstance, status, eventDate, storedBy, dataValues
//     }),
// }
//
// const treatmentMutation = {
//     resource: 'events',
//     type: 'create',
//     data: ({ program, programStage, orgUnit, trackedEntityInstance, status, eventDate, storedBy, dataValues }) => ({
//         program, programStage, orgUnit, trackedEntityInstance, status, eventDate, storedBy, dataValues
//     }),
// }

const Visits = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)

    const [pregnancyStatus, setPregnancyStatus] = useState()
    const [HIVStatusPreviousPositive, setHIVStatusPreviousPositive] = useState()
    const [HIVStatusPreviousNegative, setHIVStatusPreviousNegative] = useState()
    const [visitType, setVisitType] = useState()
    const [appointmentDuration, setAppointmentDuration] = useState()
    const [testName, setTestName] = useState()
    const [testResult, setTestResult] = useState()
    const [diagnosis, setDiagnosis] = useState()
    const [diagnosisType, setDiagnosisType] = useState()
    const [diseaseCode, setDiseaseCode] = useState()
    const [drug, setDrug] = useState()
    const [dosage, setDosage] = useState()
    const [duration, setDuration] = useState()
    const [serviceFee, setServiceFee] = useState()

    const [mutate, { called, loading, error, data }] = useDataMutation(mutation, {
            onComplete: (ew) => console.log(ew),
            onError: err => console.log(err),
            variables: {

            }
        }
    )


    const handleAddVisit = (value) => {
        setIsFormOpen(value)
    }

    const handleClickAway = (value) => {
        setIsFormOpen(false)
    }

    const handleSubmit = () => {
        postStage1()
        postStage2()
        postStage3()
    }

    const postStage1 = () => {
        const dataValues = [
            {dataElement : "z9Uph2K0QJ7", value : pregnancyStatus},
            {dataElement : "HN77ctoCak9", value : HIVStatusPreviousPositive},
            {dataElement : "NGFVtBv66OT", value : HIVStatusPreviousNegative},
            {dataElement : "qyfVaCtm9Pd", value : visitType},
            {dataElement : "kSma9fbkS1G", value : appointmentDuration}
        ]

        let payload = {
            program: "yGjTvvN9oLb",
            programStage: "kC9VeyqWxCY",
            orgUnit: "ImspTQPwCqd",
            trackedEntityInstance : JSON.parse(sessionStorage.getItem('healthPassport')).trackedEntityInstance,
            status : "ACTIVE",
            eventDate : new Date(),
            storedBy : 'admin',
            dataValues : dataValues
        }

        mutate(payload)
    }

    const postStage2 = () => {
        const dataValues = [
            {dataElement : "QuGfbEFkfOe", value : testName},
            {dataElement : "AaeB7Q2WChE", value : testResult},
            {dataElement : "m80n7d269Vx", value : diagnosis},
            {dataElement : "scPtS8ut6W5", value : diagnosisType},
            {dataElement : "NjGQob6FQCH", value : diseaseCode}
        ]

        let payload = {
            program: "yGjTvvN9oLb",
            programStage: "Y6GcnaQGeYn",
            orgUnit: "ImspTQPwCqd",
            trackedEntityInstance : JSON.parse(sessionStorage.getItem('healthPassport')).trackedEntityInstance,
            status : "ACTIVE",
            eventDate : new Date(),
            storedBy : 'admin',
            dataValues : dataValues
        }

        mutate(payload)
    }

    const postStage3 = () => {
        const dataValues = [
            {dataElement : "aZhyiRLA0oO", value : drug},
            {dataElement : "OWTCuLvJbAz", value : dosage},
            {dataElement : "T6Bz1c8A0oV", value : duration},
            {dataElement : "qs0eg9ZXAlc", value : serviceFee},
        ]

        let payload = {
            program: "yGjTvvN9oLb",
            programStage: "wnDutNV22LV",
            orgUnit: "ImspTQPwCqd",
            trackedEntityInstance : JSON.parse(sessionStorage.getItem('healthPassport')).trackedEntityInstance,
            status : "ACTIVE",
            eventDate : new Date(),
            storedBy : 'admin',
            dataValues : dataValues
        }

        mutate(payload)
    }

    return (
        <>
            <div style={{width: '80%', margin: 'auto'}}>
                <CardButton onClick={handleAddVisit}/>
                <Visit/>
            </div>
            <ModalForm
                title='Add New Visit'
                isOpen={isFormOpen} setIsModalOpen={handleClickAway}
                buttons={
                    <>
                        <Button
                            onClick={function(){handleClickAway()}}
                            secondary
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={function(){handleSubmit()}}
                            primary
                            type="button"
                        >
                            Add
                        </Button>
                    </>
                }
            >
                <div>
                    <h2>General Visit Data</h2>
                <FormControl>
                    <RadioGroup
                        inline
                        label="Pregnancy Status (Applicable to Females)"
                        name="pregnancy-status"
                        options={[
                            {
                                label: 'Pregnant',
                                value: 'FP'
                            },
                            {
                                label: 'Non Pregnant',
                                value: 'NP'
                            },
                            {
                                label: 'Unknown',
                                value: 'UN'
                            },
                            {
                                label: 'Male',
                                value: 'M'
                            }
                        ]}
                        onChange={(e) => {setPregnancyStatus(e.target.value)}}
                        value={pregnancyStatus}
                    />
                </FormControl>
                <FormControl>
                    <RadioGroup
                        inline
                        label="HIV Status - Previous Positive"
                        name="hiv-status-prev-pos"
                        options={[
                            {
                                label: 'Not on ART',
                                value: 'Prev + nA'
                            },
                            {
                                label: 'On ART',
                                value: 'Prev + A'
                            }
                        ]}
                        onChange={(e) => {setHIVStatusPreviousPositive(e.target.value)}}
                        value={HIVStatusPreviousPositive}
                    />
                </FormControl>
                <FormControl>
                    <RadioGroup
                        inline
                        label="HIV Status - Previous Negative"
                        name="hiv-status-prev-neg"
                        options={[
                            {
                                label: 'New Negative',
                                value: 'New -'
                            },
                            {
                                label: 'New Positive',
                                value: 'New +'
                            },
                            {
                                label: 'Not Done',
                                value: 'ND'
                            }
                        ]}
                        onChange={(e) => {setHIVStatusPreviousNegative(e.target.value)}}
                        value={HIVStatusPreviousNegative}
                    />
                </FormControl>
                <FormControl>
                    <RadioGroup
                        inline
                        label="Visit Type"
                        name="visit-type"
                        options={[
                            {
                                label: 'New',
                                value: 'N'
                            },
                            {
                                label: 'Revisit',
                                value: 'Rev'
                            },
                            {
                                label: 'Referral',
                                value: 'Ref'
                            }
                        ]}
                        onChange={(e) => setVisitType(e.target.value)}
                        value={visitType}
                    />
                </FormControl>
                <FormControl>
                    <RadioGroup
                        inline
                        label="Seen within 4 weeks of Appointment"
                        name="appointment-within"
                        options={[
                            {
                                label: 'Yes(Y)',
                                value: true
                            },
                            {
                                label: 'No(N)',
                                value: false
                            }
                        ]}
                        onChange={(e) => setAppointmentDuration(e.target.value)}
                        value={appointmentDuration}
                    />
                </FormControl>
                    <h2>Diagnosis</h2>

                    <FormControl>
                        <InputField
                            label="Name of Test"
                            name="test-name"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setTestName(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={testName}
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Test Result"
                            name="test-result"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setTestResult(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={testResult}
                        />
                    </FormControl>
                    <FormControl>
                        <InputField
                            label="Diagnosis"
                            name="diagnosis"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setDiagnosis(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={diagnosis}
                        />
                    </FormControl>
                    <RadioGroup
                        inline
                        label="Diagnosis Type"
                        name="diagnosis-type"
                        options={[
                            {
                                label: 'Confirmed',
                                value: 'Co'
                            },
                            {
                                label: 'Presumed',
                                value: 'Pr'
                            }
                        ]}
                        onChange={(e) => setDiagnosisType(e.target.value)}
                        value={diagnosisType}
                    />
                    <FormControl>
                        <InputField
                            label="Disease Code"
                            name="disease-code"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setDiseaseCode(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={diseaseCode}
                        />
                    </FormControl>

                    <h2>Treatment</h2>

                    <FormControl>
                        <InputField
                            label="Drug"
                            name="drug"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setDrug(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={drug}
                        />
                    </FormControl>

                    <FormControl>
                        <InputField
                            label="Dosage"
                            name="dosage"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setDosage(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={dosage}
                        />
                    </FormControl>

                    <FormControl>
                        <InputField
                            label="Duration"
                            name="duration"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setDuration(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={duration}
                        />
                    </FormControl>

                    <FormControl>
                        <InputField
                            label="Service Fee"
                            name="service-fee"
                            onBlur={function onBlur(){}}
                            onChange={(e) => {setServiceFee(e.target.value)}}
                            onFocus={function onFocus(){}}
                            type="text"
                            value={serviceFee}
                        />
                    </FormControl>
                </div>
            </ModalForm>
        </>
    )
}

export default Visits
