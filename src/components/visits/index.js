import React, { useState } from 'react'

import reactRouterDom from 'react-router-dom'
const { useRouteMatch } = reactRouterDom

import Visit from './visit';

const Visits = () => {
    let match = useRouteMatch("/visits");

    console.log(match)

    return (
        <>  
            <div style={{width: '80%', margin: 'auto'}}>
                <Visit/>
                <Visit/>
                <Visit/>
                <Visit/>
                <Visit/>
            </div>
        </>
    )
} 

export default Visits