import React from 'react';
import { Checkbox } from '../index';

export default {
    title      : 'Checkbox',
    component         : Checkbox,
        parameters : {
componentSubtitle : 'A Checkbox allows a user to select one or more values from a set of options.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
    </div>
);

export const CheckedByDefault = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" defaultChecked />
        <Checkbox label="Option 3" />
    </div>
);
CheckedByDefault.parameters =  { docs: { description: { story:  'A Checkbox can be checked by default.' } } };

export const OnCheckedFunction = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Checkbox label="Option 1" onChecked={() => {}} />
        <Checkbox label="Option 2" onChecked={() => {}} />
        <Checkbox label="Option 3" onChecked={() => {}} />
    </div>
);
OnCheckedFunction.parameters =  { docs: { description: { story:  'A Checkbox can trigger a function when gets checked status.' } } };

export const Required = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Checkbox label="I accept the terms and conditions" required />
    </div>
);
Required.parameters =  { docs: { description: { story:  'A Checkbox can be required.' } } };

export const ErrorStatus = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Checkbox
            label="I accept the terms and conditions"
            required
            showError
            errorMessage="You must accept the terms and conditions"
        />
    </div>
);
Required.parameters =  { docs: { description: { story:  'A Checkbox can have an error status.' } } };

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Checkbox label="You can select this option" />
        <Checkbox label="But not this one" disabled />
    </div>
);
Disabled.parameters =  { docs: { description: { story:  'A Checkbox can be disabled.' } } };
