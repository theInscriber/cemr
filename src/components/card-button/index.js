import React, { useState } from 'react'

import { Card } from '@dhis2/ui-core'
import CardHeader from '@material-ui/core/CardHeader'
import SVG from './svg';
import SvgIcon from '@material-ui/core/SvgIcon';


const CardButton = ({onClick}) => {

    const handleClick = () => {
        onClick(true)
    }

    return (
        <div onClick={handleClick}>
            <Card className="card card-button" >
                <SVG/>
                <div className="card-body" >
                    <div style={{width: 'fit-content', margin: 'auto'}}>
                        <SvgIcon fontSize="large">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                        </SvgIcon>
                    </div>
                </div>
                <CardHeader style={{textAlign: 'center'}}
                    title="Add New Visit"
                    subheader={ new Date().toDateString()}
                />
            </Card>
        </div>
    )
}

export default CardButton
