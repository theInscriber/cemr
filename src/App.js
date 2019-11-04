import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import { Card, MenuList, MenuItem, FormControl, InputField, Button } from '@dhis2/ui-core'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useState } from 'react'

import i18n from '@dhis2/d2-i18n'

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

    return (
    <div className="container">
        <style jsx>{`
            .container {
                position: absolute;
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
                                width: '100%',
                            }}
                            >
                            <Card className="card-info">
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
                        </div>
                    </Container>
                        {/* <h1>
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
