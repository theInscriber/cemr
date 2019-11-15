import React, { useState } from 'react'

import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { Card, ScrollBar, TabBar, Tab, Divider, Menu, MenuItem, DropdownButton, Button } from '@dhis2/ui-core'
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
                        action={

                            <DropdownButton 
                                component={
                                <Menu>
                                    <Divider margin="8px 0" />
                                    <MenuItem label={
                                        <Button
                                            name="Button"
                                            onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                                            primary
                                            small
                                            type="button"
                                            value="default"
                                        >
                                            Edit
                                        </Button>
                                        } 
                                        onClick={function onClick(val){alert("this is ".concat(val))}} value="two"></MenuItem>
                                    <MenuItem label="Delete" onClick={function onClick(val){alert("this is ".concat(val))}} value="three"/>
                                </Menu>}>
                            Options
                            </DropdownButton>
                        }
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