import React from 'react';
import Tabs from '../index';

export default {
    title      : 'Tabs',
    parameters : {
        component         : Tabs,
        componentSubtitle : 'Tabs shows a set of sections in which the selected one is visible.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Tabs
            tabs={[
                {
                    title   : 'Tab 1 title',
                    content : 'Tab 1 content',
                },
                {
                    title   : 'Tab 2 title',
                    content : 'Tab 2 content',
                },
                {
                    title   : 'Tab 3 title',
                    content : 'Tab 3 content',
                },
            ]}
        />
    </div>
);
