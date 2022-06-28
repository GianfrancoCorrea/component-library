import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {

    constructor(props) {
        super(props);
        const { renderAs } = this.props;
        const allowedRenderTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        const tagName = allowedRenderTags.some(validTag => validTag === renderAs) ? renderAs : 'div';
        // eslint-disable-next-line react/no-unused-state
        this.state = { tagName };
    }

    render() {
        const {
            className, children, content,
        } = this.props;
        let { size } = this.props;

        const allowedSizes = ['small', 'normal', 'medium', 'large', 'xlarge', 'huge', 'extra'];
        size = allowedSizes.some(validSize => validSize === size) ? `title-${size}` : '';

        return (
            <this.state.tagName className={`title ${size} ${className}`}>
                {content || children}
            </this.state.tagName>
        );
    }

}

Title.defaultProps = {
    className : '',
    children  : '',
    content   : '',
    renderAs  : '',
    size      : 'normal',
};

Title.propTypes = {
    /**
    Custom className
    */
    className : PropTypes.string,
    /**
    Title content
    */
    children  : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Title content
    */
    content   : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Render as h1/h6 tag
    */
    renderAs  : PropTypes.string,
    /**
    Title size
    */
    size      : PropTypes.string,
};

export default Title;
