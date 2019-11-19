import React, { useState } from 'react'

import { Card, DropdownButton, TabBar, Tab, FormControl, InputField } from '@dhis2/ui-core'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import TabContent from '../TabContent';

import _ from "lodash";
import { getValue } from '../../utils'

const Visit = ({events}) => {
    const [tabs, setSelectedTab] = useState([true, false, false, false])
    const [tabPanelValue, setTabPanelValue] = useState(0)

    const [isContentHidden, setIsContentHidden] = useState(true)

    const changeSelectedTab = (index, e) => {
        e.preventDefault();
        setSelectedTab(tabs.map((value, key) => {
            return (key === index) ? !value : false
        }))

        setTabPanelValue(index)
    }

    const getGroupedStages = (values) => {
        return _.chain(values.values)
            .groupBy((item)=>{
                return item.programStage
            })
            .toPairs()
            .map(pair => _.zipObject(['stage', 'values'], pair))
            .value();
    }

    return (
        <>
           <Card className="card action-margin-top">
                <CardHeader
                    title={events.date}
                    subheader="Visit of the Day"
                    action={
                        <DropdownButton
                            component={<span>Simplest thing</span>}
                            secondary
                            name="Button"
                            value="default"
                            onClick={() => setIsContentHidden(!isContentHidden)}
                            >
                            See More
                        </DropdownButton>
                    }
                />

                {
                    !false ? 

                    <>
                        <TabBar fixed>
                            <Tab selected={tabs[0]} onClick={(e) => changeSelectedTab(0, e)}>
                                Genral Visist Data
                            </Tab>
                            <Tab selected={tabs[1]} onClick={(e) => changeSelectedTab(1, e)}>
                                Diagnosis
                            </Tab>
                            <Tab selected={tabs[2]} onClick={(e) => changeSelectedTab(2, e)}>
                                Treatment
                            </Tab>
                        </TabBar>
                        {
                            getGroupedStages(events).map((item)=>{
                                if (item.stage === "kC9VeyqWxCY") {
                                    return (
                                        item.values.map((values)=>{
                                            return (
                                                <TabContent index={0} value={tabPanelValue}>
                                                    <div>
                                                        <FormControl>
                                                            <InputField
                                                            label="General Status Details"
                                                            name="generalStatusDetails"
                                                            // onBlur={function onBlur(){}}
                                                            // onChange={(e) => {setFirstName(e.target.value)}}
                                                            // onFocus={function onFocus(){}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'z9Uph2K0QJ7')}
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="HIV Status Previous Positive"
                                                            name="HIVStatusPreviousPositive"
                                                            // onBlur={function onBlur(){}}
                                                            // onChange={(e) => {setLastName(e.target.value)}}
                                                            // onFocus={function onFocus(){}}
                                                            value={getValue(values.dataValues, 'dataElement', 'HN77ctoCak9')}
                                                            type="text"
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="HIV Status Previous Negative"
                                                            name="HIVStatusPreviousNegative"
                                                            // onChange={(e) => {setNatinalID(e.target.value)}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'NGFVtBv66OT')}
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="Visit Type"
                                                            name="visitType"
                                                            // onChange={(e) => {setNatinalID(e.target.value)}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'qyfVaCtm9Pd')}
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="Seen within 4 Weeks"
                                                            name="seenWithin4Weekd"
                                                            // onChange={(e) => {setNatinalID(e.target.value)}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'kSma9fbkS1G')}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                </TabContent>
                                            )       
                                        })
                                    )
                                }

                                if( item.stage === "Y6GcnaQGeYn")
                                {
                                    return (
                                        item.values.map((values)=>{
                                            return (
                                                <TabContent index={1} value={tabPanelValue}>
                                                    <div>
                                                    <FormControl>
                                                            <InputField
                                                            label="Test Name"
                                                            name="testName"
                                                            // onBlur={function onBlur(){}}
                                                            // onChange={(e) => {setFirstName(e.target.value)}}
                                                            // onFocus={function onFocus(){}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'QuGfbEFkfOe')}
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="Test Result"
                                                            name="testResult"
                                                            // onBlur={function onBlur(){}}
                                                            // onChange={(e) => {setLastName(e.target.value)}}
                                                            // onFocus={function onFocus(){}}
                                                            value={getValue(values.dataValues, 'dataElement', 'AaeB7Q2WChE')}
                                                            type="text"
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="Diagnosis"
                                                            name="diagnosis"
                                                            // onChange={(e) => {setNatinalID(e.target.value)}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'm80n7d269Vx')}
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="Diagnosis Type"
                                                            name="diagnosisType"
                                                            // onChange={(e) => {setNatinalID(e.target.value)}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'scPtS8ut6W5')}
                                                            />
                                                        </FormControl>
                                                        <FormControl>
                                                            <InputField
                                                            label="Disease Code"
                                                            name="diseaseCode"
                                                            // onChange={(e) => {setNatinalID(e.target.value)}}
                                                            type="text"
                                                            value={getValue(values.dataValues, 'dataElement', 'NjGQob6FQCH')}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                </TabContent>
                                            )
                                        })
                                    )
                                }

                                if( item.stage !== "Y6GcnaQGeYn" && item.stage !== "kC9VeyqWxCY"){
                                    return (
                                        item.values.map((values)=>{
                                            return (
                                                <TabContent index={2} value={tabPanelValue}>
                                                <div>
                                                <FormControl>
                                                        <InputField
                                                        label="Drug"
                                                        name="drug"
                                                        // onBlur={function onBlur(){}}
                                                        // onChange={(e) => {setFirstName(e.target.value)}}
                                                        // onFocus={function onFocus(){}}
                                                        type="text"
                                                        value={getValue(values.dataValues, 'dataElement', 'aZhyiRLA0oO')}
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <InputField
                                                        label="Dosage"
                                                        name="dosage"
                                                        // onBlur={function onBlur(){}}
                                                        // onChange={(e) => {setLastName(e.target.value)}}
                                                        // onFocus={function onFocus(){}}
                                                        value={getValue(values.dataValues, 'dataElement', 'OWTCuLvJbAz')}
                                                        type="text"
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <InputField
                                                        label="Duration"
                                                        name="duration"
                                                        // onChange={(e) => {setNatinalID(e.target.value)}}
                                                        type="text"
                                                        value={getValue(values.dataValues, 'dataElement', 'T6Bz1c8A0oV')}
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <InputField
                                                        label="Service Fee"
                                                        name="serviceFee"
                                                        // onChange={(e) => {setNatinalID(e.target.value)}}
                                                        type="text"
                                                        value={getValue(values.dataValues, 'dataElement', 'qs0eg9ZXAlc')}
                                                        />
                                                    </FormControl>
                                                </div>
                                            </TabContent>
                                            )
                                        })
                                    )
                                }
                            })
                        }
                    </>:
                    <></>  
                }
                {/* <CardActions disableSpacing>
                    <IconButton
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions> */}
                {/* <div className="card-footer">Number 3</div> */}
            </Card>
        </>
    )
}

export default Visit
