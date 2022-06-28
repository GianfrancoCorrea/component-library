import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Radio(props) {
    const {
        name, label, required, disabled,
        options, className, showError, errorMessage,
    } = props;

    const [selectedOption, setSelectedOption] = useState(null);

    const radioWrapperClasses = `form-element-wrapper 
        radio-wrapper
        ${required ? 'is-required-field' : ''} 
        ${disabled ? 'is-disabled' : ''}
        ${showError ? 'has-error' : ''}
        ${className} 
    `;

    return (
        <div className={radioWrapperClasses}>
            { label && (
                <div className="form-element-label-wrapper">
                    <span className="form-element-label">{ label }</span>
                </div>
            )}
            <div className="radio-options-wrapper">
                {options.map((option, index) => {
                    const key = `OPTION_${index}`;
                    return (
                        <div className="radio-option" key={key}>
                            <input
                                type="radio"
                                name={name}
                                disabled={disabled || option.disabled}
                                checked={option.checked || selectedOption === option.value}
                                value={option.value}
                                id={option.value}
                                readOnly
                            />
                            <label
                                className="radio-label"
                                htmlFor={option.value}
                                onClick={() => {
                                    if (!disabled && !option.disabled) {
                                        setSelectedOption(option.value);
                                    }
                                }}
                            >
                                {option.content}
                            </label>
                        </div>
                    );
                })}
            </div>
            { showError && errorMessage && (
                <div className="form-element-error-message">
                    { errorMessage }
                </div>
            )}
        </div>
    );
}

Radio.defaultProps = {
    required     : false,
    disabled     : false,
    label        : '',
    name         : '',
    className    : '',
    showError    : false,
    errorMessage : '',
};

Radio.propTypes = {
    /**
    Set as required to be selected
    */
    required : PropTypes.bool,
    /**
    Radio group can have disabled state
    */
    disabled : PropTypes.bool,
    /**
    Radio group name attr
    */
    name     : PropTypes.string,
    /**
    Radio group label text
    */
    label    : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Radio options
    */
    options  : PropTypes.arrayOf(PropTypes.shape({
        value    : PropTypes.string.isRequired,
        content  : PropTypes.string.isRequired,
        disabled : PropTypes.bool,
        checked  : PropTypes.bool,
    })).isRequired,
    /**
    Custom className
    */
    className    : PropTypes.string,
    /**
    Show Radio with error status
    */
    showError    : PropTypes.bool,
    /**
    Error message on error status
    */
    errorMessage : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Radio;
