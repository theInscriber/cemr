import React, { useState, useEffect } from 'react'
import { getValue} from "../../utils";
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { Card, ScrollBar, TabBar, Tab, Divider, Menu, MenuItem, DropdownButton, Button , MenuList} from '@dhis2/ui-core'
import SVG from '../card-button/svg'

const PersonInfo = () => {
    const [trackedEntityInstance, setTrackedEntityInstance] = useState(JSON.parse(sessionStorage.getItem('healthPassport')))

    return (
        <>
            <Card className="card" >
                <SVG/>
                <div className="card-body action-margin-top" >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                PS
                            </Avatar>
                        }
                        title={`${getValue(trackedEntityInstance.attributes, 'attribute', "UHT1HU1U0gO")} ${getValue(trackedEntityInstance.attributes, 'attribute', "G4njs26hhxm")}`}
                        subheader={new Date(getValue(trackedEntityInstance.attributes, 'attribute', "zyiaJT7keXJ")).toDateString()}
                        action={

                            <DropdownButton
                                component={
                                <Menu className="dropdown-fixed">
                                    <Divider margin="8px 0" />
                                    <MenuItem
                                        label={
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
                                    <MenuItem
                                        label={
                                            <Button
                                                name="Button"
                                                onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                                                secondary
                                                small
                                                type="button"
                                                value="default"
                                            >
                                                Delete
                                            </Button>
                                        }
                                        onClick={function onClick(val){alert("this is ".concat(val))}} value="three"/>
                                </Menu>}>
                            Options
                            </DropdownButton>
                        }
                    />
                    {/*<ScrollBar>
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
                    </ScrollBar>*/}
                    <div>
                        <Menu>
                            <MenuItem label={'Gender: '+getValue(trackedEntityInstance.attributes, 'attribute', "rJTMfOeOmpI")}/>
                            <MenuItem label={'National ID: '+getValue(trackedEntityInstance.attributes, 'attribute', "ueFYuD7UFwB")}/>
                            <MenuItem label={'Created: '+trackedEntityInstance.created}/>
                        </Menu>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default PersonInfo
