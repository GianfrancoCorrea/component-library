import React from 'react';
import Divider from '../index';

export default {
    title      : 'styled/Divider',
    component  : Divider,
    parameters : {
        componentSubtitle: 'A Divider visually segments content into groups.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras eu ultrices dolor. Quisque porttitor justo nec viverra elementum.
            Etiam non justo eu erat gravida sodales.
        </div>
        <Divider />
        <div>
            Donec vel lectus neque. Curabitur et tempor lectus, non cursus arcu.
            Proin luctus ipsum in luctus vulputate. Suspendisse potenti.
        </div>
    </div>
);

export const LargerMargins = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras eu ultrices dolor. Quisque porttitor justo nec viverra elementum.
            Etiam non justo eu erat gravida sodales.
        </div>
        <Divider space="large" />
        <div>
            Donec vel lectus neque. Curabitur et tempor lectus, non cursus arcu.
            Proin luctus ipsum in luctus vulputate. Suspendisse potenti.
        </div>
    </div>
);
LargerMargins.parameters = { docs: { description: { story: 'A Dvider can have larger margins than default ones.' } } };
