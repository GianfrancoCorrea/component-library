import React from 'react';
import { PropTypes } from 'prop-types';

function NewTabLink(props) {
    const { children, content, href, className } = props;
    return (
        <span
            onClick={() => window.open(href, '_blank')}
            className={`cursor-pointer ${className}`}
        >
            {children || content}
        </span>
    );
}

NewTabLink.defaultProps = {
    children  : '',
    content   : '',
    href      : '',
    className : '',
};

NewTabLink.propTypes = {
    /**
    NewTabLink content
    */
    children  : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    NewTabLink content
    */
    content   : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Link url
    */
    href      : PropTypes.string,
    /**
    Custom className
    */
    className : PropTypes.string,
};
export default NewTabLink;
