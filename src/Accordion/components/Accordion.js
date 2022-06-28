import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Accordion(props) {
    const { header, content, open, className, disabled, card } = props;
    const [accordionOpen, setAccordionOpen] = useState(open);

    function handleAccordionHeaderClick() {
        if (!disabled) {
            setAccordionOpen(!accordionOpen);
        }
    }

    const accordionClasses = `accordion-main-wrapper
        ${accordionOpen ? 'accordion-open' : 'accordion-closed'}
        ${disabled ? 'accordion-disabled accordion-closed' : ''}
        ${card ? 'accordion-card' : ''}
        ${className}
    `;
    return (
        <div className={accordionClasses}>
            <div className="accordion-header-wrapper" onClick={handleAccordionHeaderClick}>
                <div className="accordion-header-title">
                    {header}
                </div>
                <div className="accordion-header-caret-wrapper">
                    <span className="accordion-header-caret" />
                </div>
            </div>
            <div className="accordion-content-wrapper">
                <div className="accordion-content">
                    {content}
                </div>
            </div>
        </div>
    );
}

Accordion.defaultProps = {
    header    : '',
    content   : '',
    open      : false,
    className : '',
    disabled  : false,
    card      : true,
};

Accordion.propTypes = {
    /**
    Accordion header content
    */
    header    : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Accordion content
    */
    content   : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Set open state
    */
    open      : PropTypes.bool,
    /**
    Custom className
    */
    className : PropTypes.string,
    /**
    Set disabled state
    */
    disabled  : PropTypes.bool,
    /**
    Show as a card
    */
    card      : PropTypes.bool,
};

export default Accordion;
