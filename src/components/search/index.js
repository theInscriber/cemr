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
                                    <SearchField/>
                                </form>
                                {/* <div style={{width: '66%', margin: 'auto'}}>
                                    <Info/>
                                </div> */}
                            </div>
                        </Card>
                    </div>
                </Grid>
            </Grid>
            

            {/* <div style={{width: '50%', margin: 'auto'}}>
            </div> */}

            {/* <Results/> */}
        </>
    )
} 

export default Search