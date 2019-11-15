import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { DataQuery } from '@dhis2/app-runtime'
import reactRouterDom from 'react-router-dom'
import { searchTrackedEntityInstances } from '../../utils'
const { useHistory } = reactRouterDom

import {  FormControl, InputField, Button } from '@dhis2/ui-core'

const query = {
    trackedEntityInstances : {
        resource: 'trackedEntityInstances',
        params: {
            ou: 'ImspTQPwCqd',
            program: 'yGjTvvN9oLb'
        }
    }
}

const SearchField = ({setMatchedTrackedEntityInstances}) => {
    const [value, setValue] = useState()
    const [trackedEntityInstances, setTrackedEntityInstances] = useState()
    let history = useHistory();

    function handleClick() {
        let matchedTETs = searchTrackedEntityInstances(trackedEntityInstances, value)
        console.log('HandleClick')
        setMatchedTrackedEntityInstances(matchedTETs)
    }

    return (

        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>

                setTrackedEntityInstances(data.trackedEntityInstances.trackedEntityInstances)

                return (
                    <>
                        <Grid container alignItems="center" justify="center" spacing={3}>
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
                            <Grid item xs={2} >
                                <Button
                                    name="Button"
                                    onClick={handleClick}
                                    primary
                                    type="button"
                                    value="default"
                                    style={{width: '100%'}}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                )
            }}
        </DataQuery>


)
}

export default SearchField
