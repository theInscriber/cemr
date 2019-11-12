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
import Drawer from '@material-ui/core/Drawer'

import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { useState } from 'react'

import i18n from '@dhis2/d2-i18n'

import './style.css'

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

                                <Card className="card">
                                    {/* <Modal open small>
                                        <Modal.Title>
                                            This is a small modal with title, content and primary action
                                        </Modal.Title>
                                        <Modal.Content>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <ButtonStrip end>
                                                <Button
                                                    onClick={function(){return alert(something)}}
                                                    secondary
                                                    type="button"
                                                >
                                                    Secondary action
                                                </Button>
                                                <Button
                                                    onClick={function(){return alert(something)}}
                                                    primary
                                                    type="button"
                                                >
                                                    Primary action
                                                </Button>
                                            </ButtonStrip>
                                        </Modal.Actions>
                                    </Modal> */}
                                        <CardHeader
                                            title="Word of the Day"
                                            subheader="September 14, 2016"
                                            action={
                                                <IconButton
                                                aria-label="show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </IconButton>
                                            }
                                        />
                                    {/* <div className="card-header">
                                        <Typography color="textSecondary" gutterBottom>
                                            
                                        </Typography>
                                    </div> */}
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        
                                    </div>
                                    {/* <CardActions disableSpacing>
                                        <IconButton
                                        aria-label="show more"
                                        >
                                        <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions> */}
                                    {/* <div className="card-footer">Number 3</div> */}
                                </Card>
                                

                                <div
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
                                </div>
                            </Container>
                            <Container className="findmeg">
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
                            </Container>

                            <Container>
                                <div className=""></div>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe">
                                            PS
                                        </Avatar>
                                    }
                                    title="Paul Sembereka"
                                    subheader="September 14, 2016"
                                />
                                <div
                                    style={{
                                        maxWidth: 700
                                    }}
                                    >
                                    <TabBar fixed>
                                        <Tab>
                                        Tab A
                                        </Tab>
                                        <Tab>
                                        Tab B
                                        </Tab>
                                        <Tab selected>
                                        Tab C
                                        </Tab>
                                        <Tab>
                                        Tab D
                                        </Tab>
                                    </TabBar>
                                    <p>
                                        Max-width of this container is 700 px
                                    </p>
                                    </div>
                            </Container>

                                    
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
                <Route path="/">
                    <Container maxWidth="md">
                        <Search />
                    </Container>
                </Route>
            </Switch>
        </BrowserRouter>
)}

export default MyApp
