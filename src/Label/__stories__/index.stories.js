import React from 'react';
import Label from '../index';

export default {
    title      : 'styled/Label',
    component  : Label,
    parameters : {
        componentSubtitle: 'A Label displays content classification.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Label content="Label" />
    </div>
);

export const Colors = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Label color="red" content="red" />
        {' '}
        <Label color="orange" content="orange" />
        {' '}
        <Label color="yellow" content="yellow" />
        {' '}
        <Label color="green" content="green" />
        {' '}
        <Label color="blue" content="blue" />
        {' '}
        <Label color="teal" content="teal" />
        {' '}
        <Label color="purple" content="purple" />
        {' '}
        <Label color="pink" content="pink" />
        {' '}
    </div>
);
Colors.parameters = { docs: { description: { story: 'A Label can be rendered in different colors.' } } };

export const Inverted = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Label color="red" content="red" inverted />
        {' '}
        <Label color="orange" content="orange" inverted />
        {' '}
        <Label color="yellow" content="yellow" inverted />
        {' '}
        <Label color="green" content="green" inverted />
        {' '}
        <Label color="blue" content="blue" inverted />
        {' '}
        <Label color="teal" content="teal" inverted />
        {' '}
        <Label color="purple" content="purple" inverted />
        {' '}
        <Label color="pink" content="pink" inverted />
        {' '}
    </div>
);
Inverted.parameters = { docs: { description: { story: 'A Label can be rendered with a light background and color text.' } } };

export const Ribbon = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Label ribbonLeft content="Free" />
        {' '}
        <Label ribbonRight color="red" content="10% OFF!" />
    </div>
);
Ribbon.parameters = { docs: { description: { story: 'A Label can be rendered as a ribbon' } } };

export const Size = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Label content="Label size normal" />
        {' '}
        <Label content="Label size small" size="small" />
    </div>
);
Size.parameters = { docs: { description: { story: 'A Label can be rendered in 2 sizes' } } };

export const WithIcon = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Label
            content="Featured"
            icon="star"
        />
    </div>
);
WithIcon.parameters = { docs: { description: { story: 'A Label can have an icon' } } };
