import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import reactRouterDom from 'react-router-dom'
const { useHistory } = reactRouterDom

import {  FormControl, InputField, Button } from '@dhis2/ui-core'

const SearchField = () => {
    const [value, setValue] = useState("")
    let history = useHistory();

    function handleClick() {
        history.push("/visits");
    }


    return (
        <Grid container alignItems="center" spacing={3}>
            <Grid item xs={8}>
                <FormControl>
                    <InputField
                        dense
                        label="Patient Name / ID "
                        name="searchParam"
                        onBlur={function onBlur(){}}
                        onChange={function onChange(e){setValue(e.target.value)}}
                        onFocus={function onFocus(){}}
                        value={value}
                        type="text"
                        />
                </FormControl>
            </Grid>
            <Grid item xs={4} >
                <Button
                    name="Button"
                    onClick={handleClick}
                    primary
                    type="button"
                    value="default"
                    >
                    Search
                </Button>
            </Grid>
        </Grid>
)
} 

export default SearchField