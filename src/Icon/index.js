import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
    const { name, className, disabled } = props;

    let { size } = props;
    const allowedSizes = ['small', 'normal', 'medium', 'large', 'xlarge', 'huge', 'extra'];
    size = allowedSizes.some(validSize => validSize === size) ? `icon-size-${size}` : '';

    return (
        <span className={`icon icon-${name} 
            ${disabled ? 'text-muted' : ''}
            ${size} 
            ${className}
        `}
        />
    );
}

Icon.defaultProps = {
    className : '',
    size      : 'normal',
    disabled  : false,
};

Icon.propTypes = {
    /**
    Icon name
    */
    name      : PropTypes.string.isRequired,
    /**
    Icon size
    */
    size      : PropTypes.string,
    /**
    Icon disabled
    */
    disabled  : PropTypes.bool,
    /**
    Custom className
    */
    className : PropTypes.string,
};

export default Icon;
