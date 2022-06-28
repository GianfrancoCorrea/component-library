import React from 'react';
import Accordion from '../index';

export default {
    title      : 'Accordion',
    component         : Accordion,
        parameters : {
componentSubtitle : 'An Accordion allows users to toggle the display of sections of content.',
    },
};

const accordionHeader = 'Accordion header';
const accordionContent = 'Accordion content';

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Accordion
            header={accordionHeader}
            content={accordionContent}
        />
    </div>
);

export const Open = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Accordion
            header={accordionHeader}
            content={accordionContent}
            open
        />
    </div>
);
Open.parameters =  { docs: { description: { story:  'The Accordion can be opened by default' } } };

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Accordion
            header={accordionHeader}
            content={accordionContent}
            disabled
        />
    </div>
);
Disabled.parameters =  { docs: { description: { story:  'The Accordion can have a disabled state' } } };

export const Card = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Accordion
            header={accordionHeader}
            content={accordionContent}
            card
            open
        />
    </div>
);
Card.parameters =  { docs: { description: { story:  'The Accordion can look like a Card' } } };
