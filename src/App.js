import React from 'react'
import reactRouterDom from 'react-router-dom'

// Dereference the named export property
// You can dereference multiple named exports in a single line
const { BrowserRouter, Switch, Route, Link } = reactRouterDom

import { DataQuery } from '@dhis2/app-runtime'
import { 
        Card, MenuList, MenuItem, FormControl, InputField, Button, Modal,ButtonStrip, TabBar, Tab
    } 
    from '@dhis2/ui-core'

import Search from './components/search'

// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import i18n from '@dhis2/d2-i18n'

import './style.css'
import Visits from './components/visits';
import PersonInfo from './components/person-info';

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
    // const classes = useStyles();
   
    
    const dispalyIndicators = (  {indicators: {indicators}}) => { 
        return indicators.map(indicator =>  <MenuItem
            dense
            label={indicator.displayName}
            value={indicator.displayName}
            />)
    }

    const [state, setState] = React.useState({
        bottom: false
      });
    
      const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

    return (
        <BrowserRouter>
            <div className="container">
                <style jsx>{`
                    .container {
                        position: unset;
                        top: 48px;
                        bottom: 0px;
                        left: 0px;
                        right: 0px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: 1rem;
                    }
                }`}</style>
                <DataQuery query={query}>
                    {({ error, loading, data }) => {
                        if (error) return <span>ERROR</span>
                        if (loading) return <span>...</span>
                        return (
                            <>
                            <Container maxWidth="md">
                                
                                {/* <Search/> */}
                                {/* <MenuList>
                                    {dispalyIndicators(data)}
                                
                                </MenuList> */}

                                <div className="sidebar">
                                    <Container>
                                        <PersonInfo/>
                                    </Container>
                                </div>
                                
                                

                                {/* <div
                                    style={{
                                        width: '60%',
                                    }}
                                    >

                                    <Card className="card">
                                        <form>
                                        <FormControl>
                                            <InputField
                                            label="First Name"
                                            name="input"
                                            onBlur={function onBlur(){}}
                                            onChange={function onChange(){console.log("Nothing happens")}}
                                            onFocus={function onFocus(){}}
                                            type="text"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputField
                                            label="Last Name"
                                            name="input2"
                                            onBlur={function onBlur(){}}
                                            onChange={function onChange(){console.log("Nothing happens")}}
                                            onFocus={function onFocus(){}}
                                            type="text"
                                            />
                                        </FormControl>
                                        </form>
                                    </Card>
                                </div> */}
                            </Container>
                            {/* <Container className="findmeg">
                                <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
                                
                                <Drawer className="journey-container" anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                                    <MenuList>
                                        {dispalyIndicators(data)}
                                    
                                    </MenuList>
                                    <div className="journey">
                                        <Button
                                        name="Button"
                                        className="journey-inner"
                                        onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                                        primary
                                        type="button"
                                        value="default"
                                        >
                                            Label me!
                                        </Button>
                                    </div>
                                </Drawer>
                            </Container> */}

                            
                                    
                                {/* 
                                <h1>
                                    {i18n.t('Hello {{name}}', { name: data.me.name })}
                                </h1>
                                <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                                
                                <ul>
                                </ul> */}
                                {/* <pre>
                                    {data.indicators.indicators
                                        .map(ind => ind.displayName)
                                        .join('\n')}
                                </pre> */}
                            </>
                        )
                    }}
                </DataQuery>
            </div>
            <Switch>
                <Route path="/visits">
                    <Container maxWidth="md">
                        <Visits/>
                    </Container>
                </Route>
                <Route path="/">
                    <Container maxWidth="md">
                        <Search />
                    </Container>
                </Route>
            </Switch>
        </BrowserRouter>
)}

export default MyApp
