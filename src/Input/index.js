import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/Icon';

function Input(props) {
    const {
        name, type, label, className, onChange, required, showError, value,
        onKeyUp, onKeyDown, onKeyPress, onFocus, onBlur, extraContent, errorMessage,
        icon, reference, readOnly, disabled, onClick, labelHint, qaData, placeholder,
    } = props;

    let { iconPosition } = props;
    iconPosition = ['left', 'right'].some(validPosition => validPosition === iconPosition) ? `icon-position-${iconPosition}` : '';

    const inputLabel = (
        <label htmlFor={name} className="form-element-label">
            { label }
        </label>
    );

    const inputWrapperClasses = `form-element-wrapper 
        ${required ? 'is-required-field' : ''} 
        ${showError ? 'has-error' : ''}
        ${className} 
    `;

    return (
        <div className={inputWrapperClasses}>
            { label && (
                <div className="form-element-label-wrapper">
                    {
                        labelHint
                            ? (
                                <>
                                    { inputLabel }
                                    <div className="form-element-label-hint">
                                        { labelHint }
                                    </div>
                                </>
                            )
                            : inputLabel
                    }
                </div>
            )}
            <div className={`input-wrapper ${iconPosition}`}>
                { icon && <Icon name={icon} /> }
                <input
                    type={type}
                    name={name}
                    ref={reference}
                    onChange={onChange}
                    className={`form-element ${showError && 'has-error'}`}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    onKeyPress={onKeyPress}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value}
                    {...qaData}
                />
            </div>
            { showError && errorMessage && (
                <div className="form-element-error-message">
                    { errorMessage }
                </div>
            )}
            { extraContent && (
                <div className="form-element-extra-content">
                    { extraContent }
                </div>
            )}
        </div>
    );
}

Input.defaultProps = {
    className    : '',
    label        : '',
    labelHint    : '',
    name         : '',
    onBlur       : () => {},
    onChange     : () => {},
    onFocus      : () => {},
    onKeyDown    : () => {},
    onKeyPress   : () => {},
    onKeyUp      : () => {},
    required     : false,
    type         : 'text',
    extraContent : '',
    icon         : '',
    iconPosition : '',
    readOnly     : false,
    disabled     : false,
    reference    : null,
    onClick      : () => {},
    qaData       : {},
    showError    : false,
    errorMessage : '',
    placeholder  : '',
    value        : undefined,
};

Input.propTypes = {
    /**
    Custom className
    */
    className    : PropTypes.string,
    /**
    Input label
    */
    label        : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Input hint
    */
    labelHint    : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Input name
    */
    name         : PropTypes.string,
    /**
    Function onBlur
    */
    onBlur       : PropTypes.func,
    /**
    Function onChange
    */
    onChange     : PropTypes.func,
    /**
    Function onFocus
    */
    onFocus      : PropTypes.func,
    /**
    Function onKeyDown
    */
    onKeyDown    : PropTypes.func,
    /**
    Function onKeyPress
    */
    onKeyPress   : PropTypes.func,
    /**
    Function onClick
    */
    onClick      : PropTypes.func,
    /**
    Function onKeyUp
    */
    onKeyUp      : PropTypes.func,
    /**
    Required Input
    */
    required     : PropTypes.bool,
    /**
    Input type
    */
    type         : PropTypes.string,
    /**
    Element render after Input
    */
    extraContent : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Icon to show inside Input
    */
    icon         : PropTypes.string,
    /**
    Icon position (left or right)
    */
    iconPosition : PropTypes.string,
    /**
    readOnly Input
    */
    readOnly     : PropTypes.bool,
    /**
    Input disabled
    */
    disabled     : PropTypes.bool,
    /**
    Input ref
    */
    reference    : PropTypes.shape({}),
    qaData       : PropTypes.shape({}),
    /**
    Show Input with error status
    */
    showError    : PropTypes.bool,
    /**
    Error message on error status
    */
    errorMessage : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Input placeholder
    */
    placeholder  : PropTypes.string,
    /**
    Input value (can't be modified by the user)
    */
    value        : PropTypes.string,
};

export default Input;
