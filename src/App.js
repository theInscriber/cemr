import React from 'react'
import reactRouterDom from 'react-router-dom'

// Dereference the named export property
// You can dereference multiple named exports in a single line
const { BrowserRouter, Switch, Route, Link } = reactRouterDom

// import { Provider } from 'react-redux'
// import store from './store'

import { DataQuery } from '@dhis2/app-runtime'

import Search from './components/search'


import Container from '@material-ui/core/Container';

import i18n from '@dhis2/d2-i18n'

import './style.css'
import Visits from './components/visits';
import Person from './components/person';

const query = {
    me: {
        resource: 'me',
    },
    indicators: {
        resource: 'indicators',
        params: ({ count }) => ({
            order: 'shortName:desc',
            pageSize: count,
        })
    },
}

const MyApp = () => {

    return (
        // <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/person">
                        <Container maxWidth={false} >
                            <Person/>
                        </Container>
                    </Route>
                    <Route path="/">
                        <Container maxWidth="md">
                            <Search />
                        </Container>
                    </Route>
                </Switch>
            </BrowserRouter>
        // </Provider>
    )
}

export default MyApp
