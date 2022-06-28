import React from 'react';
import PropTypes from 'prop-types';

function LoadingSpinner(props) {
    const { pageLoader, sectionLoader, message, className } = props;

    return (
        <div className={`spinner-wrapper ${pageLoader ? 'page-spinner-wrapper' : ''} ${sectionLoader ? 'section-spinner-wrapper' : ''} ${className}`}>
            <div className="spinner" />
            {message && <div className="spinner-message">{message}</div>}
        </div>
    );
}

LoadingSpinner.defaultProps = {
    pageLoader    : false,
    message       : '',
    className     : '',
    sectionLoader : false,
};

LoadingSpinner.propTypes = {
    /**
    LoadingSpinner with large margins
    */
    pageLoader    : PropTypes.bool,
    /**
    LoadingSpinner with medium margins
    */
    sectionLoader : PropTypes.bool,
    /**
    LoadingSpinner message
    */
    message       : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Custom className
    */
    className     : PropTypes.string,
};

export default LoadingSpinner;
