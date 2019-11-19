import React from 'react'
import reactRouterDom from 'react-router-dom'

const { BrowserRouter, Switch, Route, Link } = reactRouterDom

import Search from './components/search'

import Container from '@material-ui/core/Container';

import './style.css'
import Person from './components/person';

const MyApp = () => {

    return (
        // <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/health-passport">
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
