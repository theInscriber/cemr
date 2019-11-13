import React, { useState } from 'react'

import { Card } from '@dhis2/ui-core'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Visit = () => {

    return (
        <>  
           <Card className="card">
                <CardHeader
                    title="Visit of the day"
                    subheader="September 14, 2016"
                    action={
                        <IconButton
                        aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    }
                />
                <div className="card-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    
                </div>
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