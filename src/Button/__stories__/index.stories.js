import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../index';

export default {
    title      : 'Button',
    component         : Button,
        parameters : {
componentSubtitle : 'A Button indicates a possible user action.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button content="Default button" />
    </div>
);

export const Emphasis = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            primary
            content="Button primary"
        />
        {' '}
        <Button
            secondary
            content="Button secondary"
        />
        {' '}
        <Button
            transparent
            content="Button transparent"
        />
    </div>
);
Emphasis.parameters =  { docs: { description: { story:  'A Button can be formatted to show different levels of emphasis.' } } };

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            disabled
            content="Button disabled"
        />
        {' '}
        <Button
            disabled
            primary
            content="Button primary"
        />
        {' '}
        <Button
            disabled
            secondary
            content="Button secondary"
        />
        {' '}
        <Button
            disabled
            transparent
            content="Button transparent"
        />
    </div>
);
Disabled.parameters =  { docs: { description: { story:  'A Button can have a disabled state.' } } };

export const OnClickFunction = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            content="Click to event"
            onClick={action('Button clicked')}
        />
    </div>
);
OnClickFunction.parameters =  { docs: { description: { story:  'A Button can trigger an event.' } } };

export const Type = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            type="button"
            content="Button type button"
        />
        {' '}
        <Button
            type="submit"
            content="Button type submit"
        />
        {' '}
        <Button
            type="reset"
            content="Button type reset"
        />
    </div>
);
Type.parameters =  { docs: { description: { story:  'A Button can be render as type button, submit or reset.' } } };

export const Sizes = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            size="small"
            content="Button small"
        />
        {' '}
        <Button
            size="normal"
            content="Button normal"
        />
        {' '}
        <Button
            size="large"
            content="Button large"
        />
    </div>
);
Type.parameters =  { docs: { description: { story:  'A Button can be render in 3 different sizes (small, normal and large).' } } };

export const Fluid = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            fluid
            content="Button fluid"
        />
    </div>
);
Fluid.parameters =  { docs: { description: { story:  'A Button can takes the full width of its parent.' } } };

export const Loading = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Button
            loading
            content="Button loading"
        />
    </div>
);
Loading.parameters =  { docs: { description: { story:  'A Button can have a loadig state.' } } };
