import React, { useState } from 'react'

import { Card, DropdownButton } from '@dhis2/ui-core'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import _ from "lodash";
import { getValue } from '../../utils'

const Visit = ({events}) => {
    const [isContentHidden, setIsContentHidden] = useState(true)

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
                        // <IconButton
                        // aria-label="show more"
                        // >
                        //     <ExpandMoreIcon />
                        // </IconButton>
                    }
                />
                { !isContentHidden ?
                    <div className="card-body" >
                        {
                            getGroupedStages(events).map((item)=>{
                                console.log(item)
                                if (item.stage === "kC9VeyqWxCY") {
                                    return (
                                        item.values.map((values)=>{
                                                return (
                                                    <>
                                                        <h2>
                                                            General Status Details
                                                        </h2>
                                                        <div>
                                                            <p>Pregnancy Status : {getValue(values.dataValues, 'dataElement', 'z9Uph2K0QJ7')}</p>
                                                            <p>HIVStatusPreviousPositive : {getValue(values.dataValues, 'dataElement', 'HN77ctoCak9')}</p>
                                                            <p>HIVStatusPreviousNegative : {getValue(values.dataValues, 'dataElement', 'NGFVtBv66OT')}</p>
                                                            <p>visitType : {getValue(values.dataValues, 'dataElement', 'qyfVaCtm9Pd')}</p>
                                                            <p>Seen within 4 Weeks : {getValue(values.dataValues, 'dataElement', 'kSma9fbkS1G')}</p>
                                                        </div>
                                                    </>
                                                )
                                        })

                                    )
                                }

                                if( item.stage === "Y6GcnaQGeYn")
                                {
                                    return (
                                        item.values.map((values)=>{
                                            return (
                                                <>
                                                    <h2>
                                                        Diagnosis
                                                    </h2>
                                                    <div>
                                                        <p>Test Name : {getValue(values.dataValues, 'dataElement', 'QuGfbEFkfOe')}</p>
                                                        <p>Test Result : {getValue(values.dataValues, 'dataElement', 'AaeB7Q2WChE')}</p>
                                                        <p>Diagnosis : {getValue(values.dataValues, 'dataElement', 'm80n7d269Vx')}</p>
                                                        <p>Diagnosis Type : {getValue(values.dataValues, 'dataElement', 'scPtS8ut6W5')}</p>
                                                        <p>Disease Code : {getValue(values.dataValues, 'dataElement', 'NjGQob6FQCH')}</p>
                                                    </div>
                                                </>
                                            )
                                        })
                                    )
                                }
                                if( item.stage !== "Y6GcnaQGeYn" && item.stage !== "kC9VeyqWxCY"){
                                    return (
                                        item.values.map((values)=>{
                                            return (
                                                <>
                                                    <h2>
                                                        Treatment
                                                    </h2>
                                                <div>
                                                    <p>Drug : {getValue(values.dataValues, 'dataElement', 'aZhyiRLA0oO')}</p>
                                                    <p>Dosage : {getValue(values.dataValues, 'dataElement', 'OWTCuLvJbAz')}</p>
                                                    <p>Duration : {getValue(values.dataValues, 'dataElement', 'T6Bz1c8A0oV')}</p>
                                                    <p>Service Fee : {getValue(values.dataValues, 'dataElement', 'qs0eg9ZXAlc')}</p>
                                                </div>
                                                </>
                                            )
                                        })
                                    )
                                }
                            })
                        }
                    </div> :
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
