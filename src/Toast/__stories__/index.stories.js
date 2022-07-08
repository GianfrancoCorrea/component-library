import React from 'react';
import Toast from '../index';

export default {
    title      : 'styled/Toast',
    component  : Toast,
    parameters : {
        componentSubtitle: 'A Toast shows information in a fixed position.',
    },
};

export const Default = () => (
    <div style={{ height: '200px', background: '#f4f4f4' }}>
        <Toast content="Toast content" />
    </div>
);

export const Position = () => (
    <div style={{ height: '200px', background: '#f4f4f4' }}>
        <Toast
            content="Vertical Top - Horizontal Left"
            yPosition="top"
            xPosition="left"
        />
        <Toast
            content="Vertical Top - Horizontal Center"
            yPosition="top"
            xPosition="center"
        />
        <Toast
            content="Vertical Top - Horizontal Right"
            yPosition="top"
            xPosition="right"
        />
        <Toast
            content="Vertical Bottom - Horizontal Left"
            yPosition="bottom"
            xPosition="left"
        />
        <Toast
            content="Vertical Bottom - Horizontal Center"
            yPosition="bottom"
            xPosition="center"
        />
        <Toast
            content="Vertical Bottom - Horizontal Right"
            yPosition="bottom"
            xPosition="right"
        />
    </div>
);
Position.parameters = { docs: { description: { story: 'A Toast can be placed in different areas.' } } };

export const Types = () => (
    <div style={{ height: '200px', background: '#f4f4f4' }}>
        <Toast
            content="Neutral"
            yPosition="top"
            xPosition="left"
        />
        <Toast
            content="Negative"
            yPosition="top"
            xPosition="right"
            type="negative"
        />
        <Toast
            content="Danger / Error"
            yPosition="bottom"
            xPosition="left"
            type="error"
        />
        <Toast
            content="Warning"
            yPosition="bottom"
            xPosition="center"
            type="warning"
        />
        <Toast
            content="Success"
            yPosition="bottom"
            xPosition="right"
            type="success"
        />
    </div>
);
Types.parameters = { docs: { description: { story: 'A Toast be rendered in different colors.' } } };
