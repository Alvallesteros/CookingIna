import React from 'react';
import './confirmation.css';

const ConfirmationModal = ({ isOpen, message, onCancel, onConfirm }) => {
    return (
        <div className={`confirmation-modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <p>{message}</p>
                <div className="confirm buttons">
                    <div className='confirm button' onClick={onCancel}>Cancel</div>
                    <div className='confirm button' onClick={onConfirm}>Confirm</div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
