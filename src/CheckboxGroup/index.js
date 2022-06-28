import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'src/Checkbox';

function CheckboxGroup(props) {
    const {
        label, className, required, showError,
        errorMessage, disabled, options,
    } = props;

    const checkboxGroupClasses = `form-element-wrapper 
        checkbox-group-wrapper
        ${required ? 'is-required-field' : ''} 
        ${showError ? 'has-error' : ''}
        ${className} 
    `;

    return (
        <div className={checkboxGroupClasses}>
            { label && (
                <div className="form-element-label-wrapper">
                    <label className="form-element-label">
                        { label }
                    </label>
                </div>
            )}
            <div className="checkbox-group-options-wrapper">
                {options.map((option, index) => {
                    const key = `OPTION_${index}`;
                    return (
                        <Checkbox
                            defaultChecked={option.defaultChecked}
                            disabled={disabled || option.disabled}
                            name={option.name}
                            label={option.label}
                            key={key}
                        />
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

CheckboxGroup.defaultProps = {
    label        : '',
    className    : '',
    required     : false,
    showError    : false,
    errorMessage : '',
    disabled     : false,
};

CheckboxGroup.propTypes = {
    label        : PropTypes.string,
    className    : PropTypes.string,
    required     : PropTypes.bool,
    showError    : PropTypes.bool,
    errorMessage : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    disabled     : PropTypes.bool,
    options      : PropTypes.arrayOf(PropTypes.shape({
        defaultChecked : PropTypes.bool,
        disabled       : PropTypes.bool,
        name           : PropTypes.string,
        label          : PropTypes.string.isRequired,
    })).isRequired,
};

export default CheckboxGroup;
