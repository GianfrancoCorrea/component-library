import React from 'react';
import Card from '../index';

export default {
    title      : 'styled/Card',
    component  : Card,
    parameters : {
        componentSubtitle: 'A Card is used to create a grouping of related content.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Card
            title="Card title"
            content="Card content"
        />
    </div>
);

export const Transparent = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Card
            transparent
            content="Card transparent"
        />
    </div>
);
Transparent.parameters = { docs: { description: { story: 'A Card can have a tranparent background.' } } };

export const TitleAction = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Card
            title="Card title"
            titleAction="Card title action"
            content="Card content"
        />
    </div>
);
TitleAction.parameters = { docs: { description: { story: 'A Card can have an element at title side.' } } };

export const VariablePadding = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Card
            noPadding
            content="Card without padding"
        />
        <br />
        <br />
        <Card content="Card with normal padding" />
        <br />
        <br />
        <Card
            largePadding
            content="Card with large padding"
        />
    </div>
);
VariablePadding.parameters = { docs: { description: { story: 'A Card can have different padding sizes.' } } };
