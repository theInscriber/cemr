import React, { useState } from 'react'

import { Modal, ButtonStrip, Button, FormControl, InputField } from '@dhis2/ui-core'
import SVG from '../card-button/svg';

const ModalForm = ({isOpen, setIsModalOpen, title, children, buttons}) => {

    const renderTitle = (title) => {
        return title ? (<Modal.Title>{title}</Modal.Title>) : <></>
    }

    const renderButtons = buttons => {
        return buttons ? buttons : <></>
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal
            large
            onClose={handleClose}
            open={isOpen}
            >
            {renderTitle(title)}
            <Modal.Content>
                <form>
                    {children}
                </form>
            </Modal.Content>
            <Modal.Actions>
                <ButtonStrip end>
                    {renderButtons(buttons)}
                </ButtonStrip>
            </Modal.Actions>
        </Modal>
    )
} 

export default ModalForm