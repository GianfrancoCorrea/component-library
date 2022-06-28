import React from 'react';
import Title from 'src/Title';
import ModalCloseIcon from './ModalCloseIcon';
import PropTypes from 'prop-types';

function ModalHeader({ title, closeIcon, onClose }) {
    return (
        <div className={`modal-header ${title ? 'has-title' : ''}`}>
            <div className="modal-title">
                <Title content={title} size="large" />
            </div>
            {closeIcon && <ModalCloseIcon onClick={onClose} />}
        </div>
    );
}

ModalHeader.defaultProps = {
    title     : '',
    closeIcon : false,
};

ModalHeader.propTypes = {
    closeIcon : PropTypes.bool,
    onClose   : PropTypes.func.isRequired,
    title     : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default ModalHeader;
