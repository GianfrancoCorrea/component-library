import React from 'react';
import PropTypes from 'prop-types';

function ModalBody({ content }) {
    return (
        <div className="modal-content">
            {content}
        </div>
    );
}

ModalBody.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default ModalBody;
