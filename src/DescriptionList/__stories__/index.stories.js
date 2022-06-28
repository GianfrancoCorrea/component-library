import React from 'react';
import DescriptionList from '../index';

export default {
    title      : 'DescriptionList',
    component         : DescriptionList,
        parameters : {
componentSubtitle : 'A DescriptionList groups terms and descriptions',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <DescriptionList
            items={[
                {
                    title   : 'Description list item title',
                    content : 'Description list item content',
                },
                {
                    title   : 'Description list item title',
                    content : 'Description list item content',
                },
                {
                    title   : 'Description list item title',
                    content : 'Description list item content',
                },
            ]}
        />
    </div>
);
