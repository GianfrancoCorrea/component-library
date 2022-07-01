import React from 'react';
import Intro from '../index';

export default {
    title      : 'portfolio/intro',
    component  : Intro,
    viewMode   : 'docs',
    parameters : {
        componentSubtitle: 'Portfolio Intro',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Intro name="john doe" />
    </div>
);

