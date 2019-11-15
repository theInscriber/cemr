import React, { useState } from 'react'
import {
    Button,
    Table, TableHead, TableRowHead, TableCellHead,
    TableBody, TableRow, TableCell, TableFoot,
}
from '@dhis2/ui-core'
import { getValue } from '../../utils'
import reactRouterDom from "react-router-dom";
const { useHistory } = reactRouterDom


const updateCurrentHealthPassport = (item) => {
    let history = useHistory();

    sessionStorage.setItem('healthPassport', JSON.stringify(item))
    history.push('/health-passport')
}

const Results = ({trackedEntityInstances}) => {

    return (
        <Table>
        <TableHead>
            <TableRowHead>
            <TableCellHead>
                National ID
            </TableCellHead>
            <TableCellHead>
                First Name
            </TableCellHead>
            <TableCellHead>
                Last Name
            </TableCellHead>
            <TableCellHead>
                Gender
            </TableCellHead>
            <TableCellHead>
                Birthdate
            </TableCellHead>
            <TableCellHead>
                Address
            </TableCellHead>
            <TableCellHead>
                Created
            </TableCellHead>
            </TableRowHead>
        </TableHead>
        <TableBody>
            {
                trackedEntityInstances.map((item) => (
                        <TableRow>
                        <TableCell>
                            {getValue(item.attributes, 'attribute', "ueFYuD7UFwB")}
                        </TableCell>
                        <TableCell>
                            {getValue(item.attributes, 'attribute', "UHT1HU1U0gO")}
                        </TableCell>
                        <TableCell>
                            {getValue(item.attributes, 'attribute', "G4njs26hhxm")}
                        </TableCell>
                        <TableCell>
                            {getValue(item.attributes, 'attribute', "rJTMfOeOmpI")}
                        </TableCell>
                        <TableCell>
                            {getValue(item.attributes, 'attribute', "gHGyrwKPzej")}
                        </TableCell>
                        <TableCell>
                            {getValue(item.attributes, 'attribute', "yWr8ngSC52h")}
                        </TableCell>
                        <TableCell>
                            {item.created}
                        </TableCell>
                            <Button
                                name="Button"
                                onClick={updateCurrentHealthPassport(item)}
                                primary
                                type="button"
                                value="default"
                            >
                                View Person
                            </Button>
                        </TableRow>
                    ))
            }
        </TableBody>
    </Table>
    )
}

export default Results
