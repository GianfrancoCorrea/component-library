import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
    const {
        name, label, className, onChange, required, placeholder, showError,
        onKeyUp, onKeyDown, onKeyPress, onFocus, onBlur, extraContent, errorMessage,
        reference, readOnly, disabled, onClick, labelHint, maxLength, minLength,
    } = props;

    const textareaLabel = (
        <label htmlFor={name} className="form-element-label">
            { label }
        </label>
    );

    const textareaWrapperClasses = `form-element-wrapper
        ${required ? 'is-required-field' : ''}
        ${showError ? 'has-error' : ''}
        ${className}
    `;

    return (
        <div className={textareaWrapperClasses}>
            { label && (
                <div className="form-element-label-wrapper">
                    {
                        labelHint
                            ? (
                                <>
                                    { textareaLabel }
                                    <div className="form-element-label-hint">
                                        { labelHint }
                                    </div>
                                </>
                            )
                            : textareaLabel
                    }
                </div>
            )}
            <div className="textarea-wrapper">
                <textarea
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
                    maxLength={maxLength}
                    minLength={minLength}
                    placeholder={placeholder}
                />
            </div>
            { (minLength || maxLength) && (
                <div className="textarea-length-reference">
                    { minLength && !maxLength && (
                        <span>
                            Min lenght
                            {': '}
                            <b>{minLength}</b>
                        </span>
                    )}
                    { !minLength && maxLength && (
                        <span>
                            Max lenght
                            {': '}
                            <b>{maxLength}</b>
                        </span>
                    )}
                    { minLength && maxLength && (
                        <span>
                            Lenght
                            {': '}
                            <b>{minLength}</b>
                            {' / '}
                            <b>{maxLength}</b>
                        </span>
                    )}
                </div>
            )}
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

Textarea.defaultProps = {
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
    extraContent : '',
    readOnly     : false,
    disabled     : false,
    reference    : null,
    onClick      : () => {},
    placeholder  : '',
    maxLength    : null,
    minLength    : null,
    showError    : false,
    errorMessage : '',
};

Textarea.propTypes = {
    /**
    Custom className
    */
    className    : PropTypes.string,
    /**
    Textarea label
    */
    label        : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Textarea hint
    */
    labelHint    : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Textarea name
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
    Required Textarea
    */
    required     : PropTypes.bool,
    /**
    Element render after Textarea
    */
    extraContent : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    readOnly Textarea
    */
    readOnly     : PropTypes.bool,
    /**
    Textarea disabled
    */
    disabled     : PropTypes.bool,
    /**
    Textarea ref
    */
    reference    : PropTypes.shape({}),
    /**
    Textarea placeholder
    */
    placeholder  : PropTypes.string,
    /**
    Textarea content maximum lenght
    */
    maxLength    : PropTypes.number,
    /**
    Textarea content minimum lenght
    */
    minLength    : PropTypes.number,
    /**
    Show Textarea with error status
    */
    showError    : PropTypes.bool,
    /**
    Error message on error status
    */
    errorMessage : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Textarea;
