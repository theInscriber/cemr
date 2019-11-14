import React, { useState } from 'react'

import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { Card, ScrollBar, TabBar, Tab } from '@dhis2/ui-core'
import SVG from '../card-button/svg'

const PersonInfo = () => {

    return (
        <>
            <Card className="card" >
                <SVG/>
                <div className="card-body" >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                PS
                            </Avatar>
                        }
                        title="Paul Semberseka"
                        subheader="September 14, 2016"
                    />
                    <ScrollBar>
                        <TabBar fixed>
                            <Tab>
                                Tab A
                            </Tab>
                            <Tab>
                                Tab B
                            </Tab>
                            <Tab selected>
                                Tab C
                            </Tab>
                            <Tab>
                                Tab D
                            </Tab>
                        </TabBar>
                    </ScrollBar>
                    <p>
                        Max-width of this container is 700 px
                    </p>
                </div>
            </Card>
        </>
    )
} 

export default PersonInfo