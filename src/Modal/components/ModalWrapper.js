import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

function ModalWrapper({ children, className, onClick }) {
    // Prevent scrolling and handle DOM events
    useLayoutEffect(() => {
        // close on press escape
        const handleKeyUp = e => (e.keyCode === 27 ? onClick(e) : null);
        // listen for escape press
        if (onClick) { document.addEventListener('keyup', handleKeyUp, false); }
        // hide scroll bar
        document.body.style.overflow = 'hidden';

        const unMount = () => {
            document.body.removeAttribute('style');
            document.removeEventListener('keyup', handleKeyUp, false);
        };

        return () => unMount();
    }, [onClick]);

    return (
        <div className="modal-main-wrapper" onClick={(e) => { e.stopPropagation(); }}>
            <div className="modal-overlay" onClick={onClick} />
            <div className={`modal-wrapper ${className}`}>
                {children}
            </div>
        </div>

    );
}

ModalWrapper.defaultProps = {
    onClick: () => {},
};

ModalWrapper.propTypes = {
    children  : PropTypes.node.isRequired,
    className : PropTypes.string.isRequired,
    onClick   : PropTypes.func,
};

export default ModalWrapper;
