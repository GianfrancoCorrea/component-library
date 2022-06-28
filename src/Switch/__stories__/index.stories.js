import React from 'react';
import Switch from '../index';

export default {
    title      : 'Switch',
    parameters : {
        component         : Switch,
        componentSubtitle : 'A Switch allows user to select between two options.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Switch />
    </div>
);

export const Labels = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Switch
            falseOptionLabel="Close"
            trueOptionLabel="Open"
        />
    </div>
);
Labels.story = {
    parameters: { docs: { storyDescription: 'A Switch can have custom labels.' } },
};

export const DefaultState = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Switch
            falseOptionLabel="Close"
            trueOptionLabel="Open"
        />
        <br />
        <br />
        <Switch
            falseOptionLabel="Close"
            trueOptionLabel="Open"
            active
        />
    </div>
);
DefaultState.story = {
    parameters: { docs: { storyDescription: 'A Switch can have active state by default.' } },
};

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Switch
            falseOptionLabel="Inactive"
            trueOptionLabel="Active"
            disabled
        />
    </div>
);
Disabled.story = {
    parameters: { docs: { storyDescription: 'A Switch can be disabled.' } },
};

export const WithoutLabels = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Switch withoutLabels />
    </div>
);
WithoutLabels.story = {
    parameters: { docs: { storyDescription: 'A Switch can be rendered without labels.' } },
};
