import React from 'react';
import PropTypes from 'prop-types';

function ModalFooter({ content }) {
    return (
        <div className="modal-footer">
            {content}
        </div>
    );
}

ModalFooter.propTypes = {
    content: PropTypes.node.isRequired,
};

export default ModalFooter;
