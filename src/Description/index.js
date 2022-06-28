import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Description(props) {
    const {
        children, content, className, dontCrop,
        linesToShow,
    } = props;
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [descriptionContentHeight, setDescriptionContentHeight] = useState(null);
    const [descriptionLongerThanLimit, setDescriptionLongerThanLimit] = useState(false);

    const descriptionContent = useRef(null);

    const descriptionCroppedHeight = linesToShow * 20; // 20 for line-height

    useEffect(() => {
        function compareElementsHeight() {
            setDescriptionContentHeight(descriptionContent.current.clientHeight);
            setDescriptionLongerThanLimit(descriptionContentHeight > descriptionCroppedHeight);
        }
        window.addEventListener('resize', compareElementsHeight);
        return compareElementsHeight();
    }, [descriptionContentHeight, descriptionCroppedHeight]);

    const descriptionCroppedStyles = {
        maxHeight: `${descriptionCroppedHeight}px`,
    };

    const descriptionNotCroppedStyles = {
        maxHeight: '1000rem',
    };

    return (
        <div className={`description ${className}`}>
            <div
                className={`description-content ${(descriptionLongerThanLimit && !descriptionOpen) ? 'description-cropped' : ''}`}
                ref={descriptionContent}
                style={
                    !dontCrop && descriptionLongerThanLimit && !descriptionOpen
                        ? descriptionCroppedStyles
                        : descriptionNotCroppedStyles
                }
            >
                { children || content }
            </div>
            { !dontCrop && descriptionLongerThanLimit && (
                <div className="description-trigger-wrapper">
                    <small
                        className="description-trigger text-link"
                        onClick={() => setDescriptionOpen(!descriptionOpen)}
                    >
                        {
                            descriptionOpen
                                ? 'Show less'
                                : 'Show more'
                        }
                    </small>
                </div>
            )}
        </div>
    );
}

Description.defaultProps = {
    children    : '',
    content     : '',
    className   : '',
    dontCrop    : false,
    linesToShow : 4,
};

Description.propTypes = {
    /**
    Description content
    */
    children    : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Description content
    */
    content     : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Custom className
    */
    className   : PropTypes.string,
    /**
    Show full Description content withput being cropped
    */
    dontCrop    : PropTypes.bool,
    /**
    Amount of lines to be shown when Description is cropped
    */
    linesToShow : PropTypes.number,
};

export default Description;
