import React from 'react';
import PropTypes from 'prop-types';
import Title from 'src/Title';

function Card(props) {
    const {
        children, content, transparent, title, className,
        titleAction, largePadding, noPadding,
    } = props;

    const cardClassName = `card 
        ${transparent ? ' transparent' : ''} 
        ${largePadding ? 'with-large-padding' : ''}
        ${noPadding ? 'without-padding' : ''}
        ${className}
    `;

    return (
        <div className={cardClassName}>
            { title && (
                <div className="card-header">
                    <Title size="large" content={title} />
                    {titleAction && (
                        <div className="card-title-action">
                            {titleAction}
                        </div>
                    )}
                </div>
            )}
            { content || children }
        </div>
    );
}

Card.defaultProps = {
    children     : '',
    content      : '',
    transparent  : false,
    title        : '',
    className    : '',
    titleAction  : '',
    largePadding : false,
    noPadding    : false,
};

Card.propTypes = {
    /**
    Card content
    */
    children     : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Card content
    */
    content      : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Card without background
    */
    transparent  : PropTypes.bool,
    /**
    Card title
    */
    title        : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Custom className
    */
    className    : PropTypes.string,
    /**
    Card title side element
    */
    titleAction  : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Card larger padding
    */
    largePadding : PropTypes.bool,
    /**
    Card without padding
    */
    noPadding    : PropTypes.bool,
};

export default Card;
