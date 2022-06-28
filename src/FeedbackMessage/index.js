import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from 'src/Title';
import Icon from 'src/Icon';

function FeedbackMessage(props) {
    const {
        title, message, extraContent, icon, inlineBlock,
        align, className, onClick, onCloseClick,
        closeIcon, compact, withColumns,
    } = props;
    const [showFeedbackMesage, setShowFeedbackMessage] = useState(true);
    let { type } = props;
    const allowedType = ['info', 'warning', 'danger', 'error', 'success', 'neutral'];
    type = allowedType.some(validType => validType === type) ? `${type}` : '';

    function handleCloseIcon() {
        setShowFeedbackMessage(false);
        onCloseClick();
    }

    const feedbackMessageClasses = `feedback-message
        feedback-message-${type}
        ${compact ? 'feedback-message-compact' : ''}
        ${withColumns ? 'feedback-message-with-columns' : ''}
        ${inlineBlock ? 'feedback-message-inline-block' : ''}
        feedback-message-align-${align}
        ${className}
    `;

    return showFeedbackMesage && (
        <div className={feedbackMessageClasses} onClick={onClick}>
            { icon && (
                <div className="feedback-message-icon-wrapper">
                    <Icon name={icon} size="large" className="feedback-message-icon" />
                </div>
            )}
            <div className="feedback-message-content">
                { title && (
                    <Title
                        size={compact ? 'normal' : 'medium'}
                        className="feedback-message-title"
                        content={title}
                    />
                )}
                <div className="feedback-message-text">
                    {message}
                </div>
                { extraContent && (
                    <div className="feedback-message-extra-content">
                        {extraContent}
                    </div>
                )}
            </div>
            { closeIcon && (
                <div onClick={handleCloseIcon} className="feedback-message-close-wrapper">
                    <Icon name="times" className="feedback-message-close" />
                </div>
            )}
        </div>
    );
}

FeedbackMessage.defaultProps = {
    extraContent : null,
    icon         : '',
    message      : '',
    title        : '',
    type         : 'neutral',
    align        : 'left',
    closeIcon    : false,
    className    : '',
    onClick      : () => {},
    onCloseClick : () => {},
    compact      : false,
    withColumns  : false,
    inlineBlock  : false,
};

FeedbackMessage.propTypes = {
    /**
    FeedbackMessage title
    */
    title        : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    FeedbackMessage content
    */
    message      : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    FeedbackMessage type (info, danger, error, warning, success)
    */
    type         : PropTypes.string,
    /**
    Show an icon
    */
    icon         : PropTypes.string,
    /**
    FeedbackMessage extra content
    */
    extraContent : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    FeedbackMessage alignment (left, center, right)
    */
    align        : PropTypes.string,
    /**
    Show a close icon to remove the FeedbackMessage
    */
    closeIcon    : PropTypes.bool,
    /**
    Smaller FeedbackMeesage
    */
    compact      : PropTypes.bool,
    /**
    Display FeedbackMeesage content in columns
    */
    withColumns  : PropTypes.bool,
    /**
    Show FeedbackMessage as stretch as its content
    */
    inlineBlock  : PropTypes.bool,
    /**
    Function triggered clicking the FeedbackMeesage
    */
    onClick      : PropTypes.func,
    /**
    Function triggered closing the FeedbackMeesage
    */
    onCloseClick : PropTypes.func,
    /**
    Custom className
    */
    className    : PropTypes.string,
};

export default FeedbackMessage;
