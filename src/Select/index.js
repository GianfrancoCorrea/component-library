import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
    const {
        name, label, className, onChange, required, showError,
        extraContent, errorMessage, options, reference,
        disabled, labelHint, qaData,
    } = props;

    const selectLabel = (
        <label htmlFor={name} className="form-element-label">
            { label }
        </label>
    );

    const selectWrapperClasses = `form-element-wrapper 
        ${required ? 'is-required-field' : ''} 
        ${showError ? 'has-error' : ''}
        ${className} 
    `;

    return (
        <div className={selectWrapperClasses}>
            { label && (
                <div className="form-element-label-wrapper">
                    {
                        labelHint
                            ? (
                                <>
                                    { selectLabel }
                                    <div className="form-element-label-hint">
                                        { labelHint }
                                    </div>
                                </>
                            )
                            : selectLabel
                    }
                </div>
            )}
            <div className="select-wrapper">
                <select
                    name={name}
                    ref={reference}
                    onChange={onChange}
                    className={`form-element ${showError && 'has-error'}`}
                    required={required}
                    disabled={disabled}
                    {...qaData}
                >
                    { options.map((option, index) => {
                        const key = `OPTION_${index}`;
                        return (
                            <option
                                value={option.value}
                                key={key}
                                selected={option.selected}
                            >
                                { option.content }
                            </option>
                        );
                    })}
                </select>
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

Select.defaultProps = {
    className    : '',
    label        : '',
    labelHint    : '',
    name         : '',
    onChange     : () => {},
    required     : false,
    extraContent : '',
    disabled     : false,
    reference    : null,
    qaData       : {},
    showError    : false,
    errorMessage : '',
};

Select.propTypes = {
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
    Input name
    */
    onChange     : PropTypes.func,
    /**
    Required Input
    */
    required     : PropTypes.bool,
    /**
    Element render after Input
    */
    extraContent : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
    Select options
    */
    options      : PropTypes.arrayOf(PropTypes.shape({
        value    : PropTypes.string.isRequired,
        content  : PropTypes.string.isRequired,
        selected : PropTypes.bool,
    })).isRequired,
};

export default Select;
