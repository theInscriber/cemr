import React, { useState } from 'react'
import SearchField from './search-form';
import Results from './results';
import Info from './info';

import { Card } from '@dhis2/ui-core'
import CardHeader from '@material-ui/core/CardHeader'
import SVG from '../card-button/svg';
import SvgIcon from '@material-ui/core/SvgIcon';

import Grid from '@material-ui/core/Grid'


const Search = () => {
    const [trackedEntityInstances, setTrackedEntityInstances] = useState([])
    const [showAddButton, setShowAddButton] = useState(false)

    const handleMatchedTrackedEntityInstances = (instances) => {
        console.log(instances)
        setTrackedEntityInstances(instances)
        if(!showAddButton)
            setShowAddButton(true)
    }

    return (
        <>

            <Grid
                container
                justify="center"
                alignItems="center">
                <Grid item xs={12}>
                    <div style={{marginTop: '25%'}}>

                        <Card className="card card-button" >
                            <SVG/>
                            <div className="card-body" >
                                <form style={{margin: 'auto', width: '80%'}}>
                                    <SearchField setMatchedTrackedEntityInstances={handleMatchedTrackedEntityInstances}/>
                                </form>
                                <div style={{width: '66%', margin: 'auto'}}>
                                    {
                                        trackedEntityInstances.length === 0 && showAddButton ? <Info className='unset-box-shadow'/> : <></>
                                    }
                                </div>
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>


            {/* <div style={{width: '50%', margin: 'auto'}}>
            </div> */}

            <Results trackedEntityInstances={trackedEntityInstances}/>
        </>
    )
}

export default Search
