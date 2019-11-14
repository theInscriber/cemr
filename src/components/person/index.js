
import React, { useState } from 'react'

import reactRouterDom from 'react-router-dom'
const { useRouteMatch } = reactRouterDom

import Visits from '../visits';
// import CardButton from '../card-button';
// import ModalForm from '../modal-form';

import Grid from '@material-ui/core/Grid'
import PersonInfo from '../person-info';

const Person = () => {
    return (
        <>  
            <Grid container spacing={3}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <div style={{marginTop: '32px'}}>
                        <Visits/>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{marginTop: '32px', height: '47%'}}>
                        <PersonInfo/>
                    </div>
                </Grid>
            </Grid>

        </>
    )
} 

export default Person