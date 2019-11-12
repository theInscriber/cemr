import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import {  FormControl, InputField, Button } from '@dhis2/ui-core'

const Search = () => {
    const [value, setValue] = useState("")

    return (
        <form>
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
                        onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                        primary
                        type="button"
                        value="default"
                        >
                        Search
                    </Button>
                </Grid>
            </Grid>

        </form>
    )
} 

export default Search