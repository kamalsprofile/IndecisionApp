import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleCloseModal}
            contentLabel='selected option'
            closeTimeoutMS={200}
            className='modal'
        >
            <h1>Selected option is</h1>
            <h3>{props.selectedOption}</h3>
            <button onClick={props.handleCloseModal}>OK</button>
        </Modal>
    );

}
export default OptionModal;