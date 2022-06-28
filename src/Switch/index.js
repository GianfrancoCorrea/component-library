import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Switch(props) {
    const {
        falseOptionLabel, trueOptionLabel, active,
        onStatusChange, disabled, withoutLabels,
    } = props;

    const [switchStatus, setSwitchStatus] = useState(active);

    function changeStatus(status) {
        if (disabled) {
            return false;
        }
        setSwitchStatus(status);
        onStatusChange(status);
        return true;
    }

    const handleFalseOptionClick = () => changeStatus(false);
    const handleTrueOptionClick = () => changeStatus(true);
    const handleSwitchReferenceClick = () => changeStatus(!switchStatus);

    return (
        <div className={`switch-wrapper ${disabled ? 'is-disabled' : ''} ${withoutLabels ? 'without-labels' : ''}`}>
            <div
                className={`switch-option switch-option-false ${!switchStatus ? 'is-selected' : ''}`}
                onClick={handleFalseOptionClick}
            >
                {!withoutLabels && falseOptionLabel}
            </div>
            <div
                className={`switch-reference-wrapper ${switchStatus ? 'position-left' : 'position-right'}`}
                onClick={handleSwitchReferenceClick}
            >
                <span className="switch-reference" />
            </div>
            <div
                className={`switch-option switch-option-true ${switchStatus ? 'is-selected' : ''}`}
                onClick={handleTrueOptionClick}
            >
                {!withoutLabels && trueOptionLabel}
            </div>
        </div>
    );
}

Switch.defaultProps = {
    falseOptionLabel : 'No',
    trueOptionLabel  : 'Yes',
    active           : false,
    onStatusChange   : () => {},
    disabled         : false,
    withoutLabels    : false,
};

Switch.propTypes = {
    /**
    False / Inactive option text
    */
    falseOptionLabel : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    True / Active option text
    */
    trueOptionLabel  : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Default Switch status
    */
    active           : PropTypes.bool,
    /**
    Function triggered on Switch status modification
    */
    onStatusChange   : PropTypes.func,
    /**
    Disabled state
    */
    disabled         : PropTypes.bool,
    /**
    Remove Switch options text
    */
    withoutLabels    : PropTypes.bool,
};

export default Switch;
