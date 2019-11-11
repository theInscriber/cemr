import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import { 
        Card, MenuList, MenuItem, FormControl, InputField, Button, 
        Table, TableHead, TableRowHead, TableCellHead, TableBody, TableRow, TableCell, TableFoot, Content
    } 
    from '@dhis2/ui-core'
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
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

    const [value, setValue] = useState("")
    
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
                        {/* <MenuList>
                            {dispalyIndicators(data)}
                        
                        </MenuList> */}

                        <Card className="card">
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
                        <form>
                            <Grid container alignItems="center" spacing={3}>
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
                                <Grid item xs={4} >
                                    <Button

                                        name="Button"
                                        onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                                        primary
                                        type="button"
                                        value="default"
                                        >
                                        Search
                                    </Button>
                                </Grid>
                            </Grid>

                        </form>

                        <div
                            style={{
                                width: '60%',
                            }}
                            >
                            <Card className="card-info">
                                <p>Not Found</p>
                                <p>iaoio</p>
                                <Button

                                name="Button"
                                onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                                primary
                                type="button"
                                value="default"
                                >
                                    Add Patient
                                </Button>
                            </Card>

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
                    <Container>
                        <Table>
                            <TableHead>
                                <TableRowHead>
                                <TableCellHead>
                                    First name
                                </TableCellHead>
                                <TableCellHead>
                                    Last name
                                </TableCellHead>
                                <TableCellHead>
                                    Incident date
                                </TableCellHead>
                                <TableCellHead>
                                    Last updated
                                </TableCellHead>
                                <TableCellHead>
                                    Age
                                </TableCellHead>
                                <TableCellHead>
                                    Registering unit
                                </TableCellHead>
                                <TableCellHead>
                                    Assigned user
                                </TableCellHead>
                                <TableCellHead>
                                    Status
                                </TableCellHead>
                                </TableRowHead>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                <TableCell>
                                    Onyekachukwu
                                </TableCell>
                                <TableCell>
                                    Kariuki
                                </TableCell>
                                <TableCell>
                                    02/06/2007
                                </TableCell>
                                <TableCell>
                                    05/25/1972
                                </TableCell>
                                <TableCell>
                                    66
                                </TableCell>
                                <TableCell>
                                    Jawi
                                </TableCell>
                                <TableCell>
                                    Sofie Hubert
                                </TableCell>
                                <TableCell>
                                    Incomplete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Kwasi
                                </TableCell>
                                <TableCell>
                                    Okafor
                                </TableCell>
                                <TableCell>
                                    08/11/2010
                                </TableCell>
                                <TableCell>
                                    02/26/1991
                                </TableCell>
                                <TableCell>
                                    38
                                </TableCell>
                                <TableCell>
                                    Mokassie MCHP
                                </TableCell>
                                <TableCell>
                                    Dashonte Clarke
                                </TableCell>
                                <TableCell>
                                    Complete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Siyabonga
                                </TableCell>
                                <TableCell>
                                    Abiodun
                                </TableCell>
                                <TableCell>
                                    07/21/1981
                                </TableCell>
                                <TableCell>
                                    02/06/2007
                                </TableCell>
                                <TableCell>
                                    98
                                </TableCell>
                                <TableCell>
                                    Bathurst MCHP
                                </TableCell>
                                <TableCell>
                                    Unassigned
                                </TableCell>
                                <TableCell>
                                    Incomplete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Chiyembekezo
                                </TableCell>
                                <TableCell>
                                    Okeke
                                </TableCell>
                                <TableCell>
                                    01/23/1982
                                </TableCell>
                                <TableCell>
                                    07/15/2003
                                </TableCell>
                                <TableCell>
                                    2
                                </TableCell>
                                <TableCell>
                                    Mayolla MCHP
                                </TableCell>
                                <TableCell>
                                    Wan Gengxin
                                </TableCell>
                                <TableCell>
                                    Incomplete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Mtendere
                                </TableCell>
                                <TableCell>
                                    Afolayan
                                </TableCell>
                                <TableCell>
                                    08/12/1994
                                </TableCell>
                                <TableCell>
                                    05/12/1972
                                </TableCell>
                                <TableCell>
                                    37
                                </TableCell>
                                <TableCell>
                                    Gbangadu MCHP
                                </TableCell>
                                <TableCell>
                                    Gvozden Boskovsky
                                </TableCell>
                                <TableCell>
                                    Complete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Inyene
                                </TableCell>
                                <TableCell>
                                    Okonkwo
                                </TableCell>
                                <TableCell>
                                    04/01/1971
                                </TableCell>
                                <TableCell>
                                    03/16/2000
                                </TableCell>
                                <TableCell>
                                    70
                                </TableCell>
                                <TableCell>
                                    Kunike Barina
                                </TableCell>
                                <TableCell>
                                    Oscar de la Cavallería
                                </TableCell>
                                <TableCell>
                                    Complete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Amaka
                                </TableCell>
                                <TableCell>
                                    Pretorius
                                </TableCell>
                                <TableCell>
                                    01/25/1996
                                </TableCell>
                                <TableCell>
                                    09/15/1986
                                </TableCell>
                                <TableCell>
                                    32
                                </TableCell>
                                <TableCell>
                                    Bargbo
                                </TableCell>
                                <TableCell>
                                    Alberto Raya
                                </TableCell>
                                <TableCell>
                                    <Button

                                    name="Button"
                                    onClick={function(_ref){var target=_ref.target;return console.info("".concat(target.name,": ").concat(target.value))}}
                                    primary
                                    type="button"
                                    value="default"
                                    >
                                        Add Patient
                                    </Button>
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Meti
                                </TableCell>
                                <TableCell>
                                    Abiodun
                                </TableCell>
                                <TableCell>
                                    10/24/2010
                                </TableCell>
                                <TableCell>
                                    07/26/1989
                                </TableCell>
                                <TableCell>
                                    8
                                </TableCell>
                                <TableCell>
                                    Majihun MCHP
                                </TableCell>
                                <TableCell>
                                    Unassigned
                                </TableCell>
                                <TableCell>
                                    Complete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Eshe
                                </TableCell>
                                <TableCell>
                                    Okeke
                                </TableCell>
                                <TableCell>
                                    01/31/1995
                                </TableCell>
                                <TableCell>
                                    01/31/1995
                                </TableCell>
                                <TableCell>
                                    63
                                </TableCell>
                                <TableCell>
                                    Mambiama CHP
                                </TableCell>
                                <TableCell>
                                    Shadrias Pearson
                                </TableCell>
                                <TableCell>
                                    Incomplete
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell>
                                    Obi
                                </TableCell>
                                <TableCell>
                                    Okafor
                                </TableCell>
                                <TableCell>
                                    06/07/1990
                                </TableCell>
                                <TableCell>
                                    01/03/2006
                                </TableCell>
                                <TableCell>
                                    28
                                </TableCell>
                                <TableCell>
                                    Dalakuru CHP
                                </TableCell>
                                <TableCell>
                                    Anatoliy Shcherbatykh
                                </TableCell>
                                <TableCell>
                                    Incomplete
                                </TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFoot>
                                <TableRow>
                                <TableCell colSpan="8">
                                    {/* <TableFooterButton /> */}
                                </TableCell>
                                </TableRow>
                            </TableFoot>
                        </Table>
                        
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
)}

export default MyApp
