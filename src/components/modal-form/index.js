import React, { useState } from 'react'

import { Modal, ButtonStrip, Button, FormControl, InputField } from '@dhis2/ui-core'

const ModalForm = ({isOpen, setIsModalOpen}) => {

    console.log(isOpen)

    const handleClose = () => {
        console.log('clicked')
        setIsModalOpen(false)
    }

    return (
        <Modal
            large
            onClose={handleClose}
            open={isOpen}
            >
            <Modal.Title>
                Add New Visit
            </Modal.Title>
            <Modal.Content>
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
            </Modal.Content>
            <Modal.Actions>
                <ButtonStrip end>
                <Button
                    onClick={function(){return alert('something')}}
                    secondary
                    type="button"
                >
                    Cancel
                </Button>
                <Button
                    onClick={function(){return alert('something')}}
                    primary
                    type="button"
                >
                    Add
                </Button>
                </ButtonStrip>
            </Modal.Actions>
        </Modal>
    )
} 

export default ModalForm