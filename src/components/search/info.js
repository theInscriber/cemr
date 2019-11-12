import React, { useState } from 'react'
import { Button, Card } from '@dhis2/ui-core'

const Info = () => {

    return (
        <Card className="card-info">
            <div className="card-body">
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

            </div>
        </Card>
    )
} 

export default Info