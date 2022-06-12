import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ErrorWindow(props) {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}>

                <Modal.Header >
                    <Modal.Title>
                        Oops, something went wrong...
                    </Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Got it!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
