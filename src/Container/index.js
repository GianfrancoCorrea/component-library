import React from 'react';
import PropTypes from 'prop-types';

function Container(props) {
    const { children, compact, className } = props;
    return (
        <div className={`container ${compact ? 'container-compact' : ''} ${className}`}>
            {children}
        </div>
    );
}

Container.defaultProps = {
    compact   : false,
    className : '',
};

Container.propTypes = {
    /**
    Container content
    */
    children  : PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    /**
    Container with an smaller width
    */
    compact   : PropTypes.bool,
    /**
    Custom className
    */
    className : PropTypes.string,
};

export default Container;
