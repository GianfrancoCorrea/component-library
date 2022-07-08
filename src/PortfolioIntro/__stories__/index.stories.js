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
    <Intro name="john doe" />
);

