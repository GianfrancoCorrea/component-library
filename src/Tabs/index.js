import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/Icon';

const Tabs = (props) => {
    const { tabs, selectedTab, onTabChange, className } = props;
    const [currentTab, setCurrentTab] = useState(selectedTab);

    return (
        <div className={`tabs-main-wrapper ${className}`}>
            <div className="tabs-header-wrapper">
                {tabs.map((tab, index) => {
                    const key = `TAB_HEADER_ITEM_${index}`;
                    return (
                        <div
                            className={`tab-header-item ${currentTab === index ? 'is-active' : ''}`}
                            onClick={() => {
                                setCurrentTab(index);
                                onTabChange();
                            }}
                            key={key}
                        >
                            { tab.triggerIcon && (
                                <Icon name={tab.titleIcon} className="tab-header-item-icon" />
                            )}
                            <span className="tab-header-item-title">
                                {tab.title}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="tabs-content-wrapper">
                {tabs.map((tab, index) => {
                    const key = `TAB_CONTENT_${index}`;
                    return (index === currentTab)
                        ? (
                            <div key={key}>
                                {tab.content}
                            </div>
                        )
                        : null;
                })}
            </div>
        </div>
    );
};

Tabs.defaultProps = {
    selectedTab : 0,
    onTabChange : () => {},
    className   : '',
};

Tabs.propTypes = {
    /**
    Tabs content array
    */
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title     : PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        titleIcon : PropTypes.string,
        content   : PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })).isRequired,
    /**
    Function triggered on tab change
    */
    onTabChange : PropTypes.func,
    /**
    Selected tab array position
    */
    selectedTab : PropTypes.number,
    /**
    Custom className
    */
    className   : PropTypes.string,
};

export default Tabs;
