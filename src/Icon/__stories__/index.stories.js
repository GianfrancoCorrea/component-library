import React from 'react';
import Icon from '../index';

export default {
    title      : 'Icon',
    parameters : {
        component         : Icon,
        componentSubtitle : 'An Icon is a glyph used to represent something else.',
    },
};

export const Default = () => (
    <Icon name="user" />
);

export const Size = () => (
    <div>
        <Icon name="user" size="small" />
        {' '}
        <Icon name="user" size="normal" />
        {' '}
        <Icon name="user" size="medium" />
        {' '}
        <Icon name="user" size="large" />
        {' '}
        <Icon name="user" size="xlarge" />
        {' '}
        <Icon name="user" size="huge" />
        {' '}
        <Icon name="user" size="extra" />
    </div>
);
Size.story = {
    parameters: { docs: { storyDescription: 'An Icon can be rendered in different sizes' } },
};

export const Disabled = () => (
    <Icon name="user" disabled />
);
Disabled.story = {
    parameters: { docs: { storyDescription: 'An Icon can have a disabled state' } },
};
