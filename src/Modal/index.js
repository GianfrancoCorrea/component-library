import React, { useState, cloneElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalBody from './components/ModalBody';
import ModalFooter from './components/ModalFooter';
import ModalHeader from './components/ModalHeader';
import ModalWrapper from './components/ModalWrapper';

function Modal(props) {
    const {
        onOpen, onClose, trigger, title,
        content, closeIcon, className, footer,
        size, externalOpen, avoidExternalClose,
    } = props;

    const [isModalOpen, setModalOpen] = useState(externalOpen);
    const sizeClassName = ['large', 'normal', 'small', 'tiny'].some(validSize => validSize === size) ? ` size-${size}` : '';

    useEffect(() => {
        setModalOpen(externalOpen);
    }, [externalOpen]);

    const handleOpenModal = (e) => {
        e.stopPropagation();
        setModalOpen(true);
        onOpen(e);
    };

    const handleCloseModal = (e) => {
        e.stopPropagation();
        setModalOpen(false);
        onClose(e);
    };

    const triggerElement = () => {
        const onClick = handleOpenModal;
        return cloneElement(trigger, { onClick });
    };

    return (
        <div>
            { trigger && triggerElement() }
            {
                isModalOpen
                && createPortal(
                    <ModalWrapper
                        className={`${sizeClassName} ${className}`}
                        onClick={!avoidExternalClose ? handleCloseModal : undefined}
                        avoidExternalClose={avoidExternalClose}
                    >
                        {
                            (title || closeIcon)
                            && (
                                <ModalHeader
                                    title={title}
                                    closeIcon={!avoidExternalClose ? closeIcon : undefined}
                                    onClose={handleCloseModal}
                                />
                            )
                        }
                        { content && <ModalBody content={content} /> }
                        { footer && <ModalFooter content={footer} /> }
                    </ModalWrapper>,
                    document.querySelector('#react-portal'),
                )
            }
        </div>
    );
}

Modal.defaultProps = {
    trigger            : null,
    title              : '',
    content            : '',
    footer             : '',
    size               : 'normal',
    closeIcon          : true,
    className          : '',
    onOpen             : () => {},
    onClose            : () => {},
    externalOpen       : false,
    avoidExternalClose : false,
};

Modal.propTypes = {
    /**
    Element that opens modal on click
    */
    trigger            : PropTypes.node,
    /**
    Modal title
    */
    title              : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Modal content
    */
    content            : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Modal footer
    */
    footer             : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Modal size
    */
    size               : PropTypes.string,
    /**
    Show/Hide close icon on header
    */
    closeIcon          : PropTypes.bool,
    /**
    Function triggered on modal open
    */
    onOpen             : PropTypes.func,
    /**
    Function triggered on modal close
    */
    onClose            : PropTypes.func,
    /**
    Custom className
    */
    className          : PropTypes.string,
    /**
    Open modal without clicking on any element
    */
    externalOpen       : PropTypes.bool,
    /**
    Don't close modal pressing Esc key or clicking on overlay
    */
    avoidExternalClose : PropTypes.bool,
};

export default Modal;
