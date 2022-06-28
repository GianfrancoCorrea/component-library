import React from 'react';
import PropTypes from 'prop-types';

function DescriptionList(props) {
    const { className, items } = props;
    return (
        <dl className={`description-list-wrapper ${className}`}>
            {
                items.map((item, index) => {
                    const key = `ITEM_${index}`;
                    return (
                        <React.Fragment key={key}>
                            <dt>{item.title}</dt>
                            <dd>{item.content}</dd>
                        </React.Fragment>
                    );
                })
            }
        </dl>
    );
}

DescriptionList.defaultProps = {
    className: '',
};

DescriptionList.propTypes = {
    /**
    Description list elements. Each item must have a title and a content
    */
    items: PropTypes.arrayOf(PropTypes.shape({
        title   : PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        content : PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })).isRequired,
    /**
    Custom className
    */
    className: PropTypes.string,
};

export default DescriptionList;
