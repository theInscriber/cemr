import React from 'react'
import reactRouterDom from 'react-router-dom'

// Dereference the named export property
// You can dereference multiple named exports in a single line
const { HashRouter, Switch, Route, Link } = reactRouterDom

import Search from './components/search'

import Container from '@material-ui/core/Container';

import './style.css'
import Person from './components/person';

const MyApp = () => {

    return (
        // <Provider store={store}>
            <HashRouter>
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
            </HashRouter>
        // </Provider>
    )
}

export default MyApp
