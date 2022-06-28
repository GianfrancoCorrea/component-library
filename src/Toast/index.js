import React from 'react';
import PropTypes from 'prop-types';

function ToastMessage(props) {
    const {
        children, content, className,
    } = props;

    let { xPosition, yPosition, type } = props;

    const allowedXPosition = ['left', 'center', 'right'];
    xPosition = allowedXPosition.some(validPosition => validPosition === xPosition) ? `x-position-${xPosition}` : '';

    const allowedYPosition = ['top', 'bottom'];
    yPosition = allowedYPosition.some(validPosition => validPosition === yPosition) ? `y-position-${yPosition}` : '';

    const allowedType = ['warning', 'danger', 'error', 'success', 'negative', 'neutral'];
    type = allowedType.some(validType => validType === type) ? `toast-${type}` : '';

    return (
        <div className={`toast-wrapper ${xPosition} ${yPosition}`}>
            <div className={`toast ${type} ${className}`}>
                {children || content}
            </div>
        </div>
    );
}

ToastMessage.defaultProps = {
    xPosition : 'right',
    yPosition : 'bottom',
    type      : 'neutral',
    children  : null,
    content   : null,
    className : '',
};

ToastMessage.propTypes = {
    /**
    Horizontal position (left, center, right)
    */
    xPosition : PropTypes.string,
    /**
    Vertical position (left, center, right)
    */
    yPosition : PropTypes.string,
    /**
    Toast type (warning, danger, error, success, negative, neutral)
    */
    type      : PropTypes.string,
    /**
    Toast content
    */
    children  : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Toast content
    */
    content   : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Custom className
    */
    className : PropTypes.string,
};

export default ToastMessage;
