import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const {
        primary, secondary, transparent, type,
        children, content, className, onClick,
        disabled, fluid, qaData, loading,
    } = props;

    let { size } = props;
    const allowedSizes = ['small', 'normal', 'large'];
    size = allowedSizes.some(validSize => validSize === size) ? `size-${size}` : '';

    const buttonClassName = `button
        ${primary ? ' primary-button' : ''}
        ${secondary ? ' secondary-button' : ''}
        ${transparent ? ' transparent-button' : ''}
        ${fluid ? 'fluid-button' : ''}
        ${loading ? 'is-loading-button' : ''}
        ${size}
        ${className}`;

    return (
        <button // eslint-disable-line react/button-has-type
            className={buttonClassName}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...qaData}
        >
            <span className="button-content">
                { content || children }
            </span>
            { loading && <span className="button-loader" /> }
        </button>
    );
}

Button.defaultProps = {
    content     : '',
    children    : '',
    primary     : false,
    secondary   : false,
    transparent : false,
    disabled    : false,
    className   : '',
    onClick     : null,
    type        : 'button',
    size        : 'normal',
    fluid       : false,
    loading     : false,
    qaData      : {},
};

Button.propTypes = {
    /**
    Button content
    */
    content     : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Button content
    */
    children    : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Button with max emphasis
    */
    primary     : PropTypes.bool,
    /**
    Button with medium emphasis
    */
    secondary   : PropTypes.bool,
    /**
    Button with lower emphasis
    */
    transparent : PropTypes.bool,
    /**
    Button with disabled state
    */
    disabled    : PropTypes.bool,
    /**
    Button custom className
    */
    className   : PropTypes.string,
    /**
    onClick function
    */
    onClick     : PropTypes.func,
    /**
    Button html type
    */
    type        : PropTypes.oneOf(['button', 'submit', 'reset']),
    /**
    Button size
    */
    size        : PropTypes.string,
    /**
    Full width button
    */
    fluid       : PropTypes.bool,
    /**
    Button with loading state
    */
    loading     : PropTypes.bool,
    /**
    Give QA params
    */
    qaData      : PropTypes.shape({}),
};

export default Button;
