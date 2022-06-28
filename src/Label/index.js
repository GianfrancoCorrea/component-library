import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/Icon';

function Label(props) {
    const {
        children, content, ribbonLeft, ribbonRight, icon, inverted, className,
    } = props;

    let { size, color } = props;

    const allowedSizes = ['small', 'normal'];
    size = allowedSizes.some(validSize => validSize === size) ? `label-size-${size}` : '';

    const allowedColors = ['red', 'orange', 'yellow', 'green', 'blue', 'teal', 'purple', 'pink'];
    color = allowedColors.some(validColor => validColor === color) ? `label-color-${color}` : '';

    const labelClassNames = `label
        ${size}
        ${color}
        ${inverted ? 'label-inverted' : ''}
        ${ribbonLeft || ribbonRight ? 'label-has-ribbon' : ''}
        ${ribbonLeft ? 'label-has-ribbon-left' : ''}
        ${ribbonRight ? 'label-has-ribbon-right' : ''}
        ${className}`;

    return (
        <div className={labelClassNames}>
            <div className="label-content">
                { icon && <Icon name={icon} size="small" /> }
                { content || children }
                { (ribbonLeft || ribbonRight) && <span className="label-ribbon" /> }
            </div>
        </div>
    );
}

Label.defaultProps = {
    children    : '',
    content     : '',
    ribbonLeft  : false,
    ribbonRight : false,
    icon        : '',
    inverted    : false,
    size        : 'normal',
    color       : 'green',
    className   : '',
};

Label.propTypes = {
    /**
    Label content
    */
    children    : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Label content
    */
    content     : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
    Show Label as a left ribbon
    */
    ribbonLeft  : PropTypes.bool,
    /**
    Show Label as a right ribbon
    */
    ribbonRight : PropTypes.bool,
    /**
    Add an icon to the Label
    */
    icon        : PropTypes.string,
    /**
    Label lighter background
    */
    inverted    : PropTypes.bool,
    /**
    Set Label size
    */
    size        : PropTypes.string,
    /**
    Set Label color
    */
    color       : PropTypes.string,
    /**
    Custom className
    */
    className   : PropTypes.string,
};

export default Label;
