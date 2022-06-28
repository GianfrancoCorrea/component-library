import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/Icon';

function ModalCloseIcon({ onClick }) {
    return (
        <div className="modal-close" onClick={onClick}>
            <Icon name="times" />
        </div>
    );
}

ModalCloseIcon.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ModalCloseIcon;
