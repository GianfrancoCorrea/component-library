import React from 'react';
import PropTypes from 'prop-types';

function Divider(props) {
    const { className } = props;
    let { space } = props;

    const allowedSpaces = ['normal', 'large'];
    space = allowedSpaces.some(validMargin => validMargin === space) ? ` space-${space}` : '';

    const dividerClassName = `divider ${space} ${className}`;

    return (
        <hr className={dividerClassName} />
    );
}

Divider.defaultProps = {
    space     : 'normal',
    className : '',
};

Divider.propTypes = {
    /**
    Top and bootom margins
    */
    space     : PropTypes.string,
    /**
    Custom className
    */
    className : PropTypes.string,
};

export default Divider;
