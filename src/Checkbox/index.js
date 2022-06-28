import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    const {
        value, label, required, disabled, defaultChecked, onCheck,
        showError, errorMessage,
    } = props;
    const [isChecked, setChecked] = useState(defaultChecked);
    function handleOnClick() {
        if (!disabled) {
            setChecked(!isChecked);
            onCheck(!isChecked);
        }
    }
    return (
        <>
            <div className={`checkbox-wrapper ${disabled ? 'is-disabled' : ''} ${showError ? 'has-error' : ''}`}>
                <label htmlFor={value} onClick={handleOnClick}>
                    <input
                        type="checkbox"
                        value={value}
                        required={required}
                        disabled={disabled}
                        checked={isChecked}
                        readOnly
                    />
                    <span className="checkbox-label">
                        {label}
                        {required && <span className="required-form-element-asterisk"> *</span>}
                    </span>
                </label>
            </div>
            { showError && errorMessage && (
                <div className="form-element-error-message">
                    { errorMessage }
                </div>
            )}
        </>
    );
}

Checkbox.defaultProps = {
    defaultChecked : false,
    required       : false,
    onCheck        : () => { },
    disabled       : false,
    label          : '',
    value          : '',
    showError      : false,
    errorMessage   : '',
};

Checkbox.propTypes = {
    /**
    Checkbox can be checked by default
    */
    defaultChecked : PropTypes.bool,
    /**
    Function triggered when checkbox is clicked to be checked
    */
    onCheck        : PropTypes.func,
    /**
    Set as required to be checked
    */
    required       : PropTypes.bool,
    /**
    Checkbox can have disabled state
    */
    disabled       : PropTypes.bool,
    /**
    Checkbox value attr
    */
    value          : PropTypes.string,
    /**
    Checkbox label text
    */
    label          : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Checkbox error status
    */
    showError      : PropTypes.bool,
    /**
    Checkbox error status
    */
    errorMessage   : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default React.memo(Checkbox);
export { Checkbox };
