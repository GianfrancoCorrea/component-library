import React from 'react';
import Avatar from './index';

export default {
    title      : 'portfolio/Avatar',
    component  : Avatar,
    viewMode   : 'docs',
    parameters : {
        componentSubtitle: 'Portfolio Avatar',
    },
};

export const Default = () => (
    <Avatar
        name="john doe"
        subject={'I\'m a'}
        descriptions={['definition 1 ', 'definition 2']}
        avatar="https://avatars0.githubusercontent.com/u/17098281?s=460&v=4"
    />
);

